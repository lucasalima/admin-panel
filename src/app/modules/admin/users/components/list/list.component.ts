import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

// Material
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// Services
import { BrowserTitleService } from 'src/app/shared/services/browser-title.service';
import { UsersService } from '../../services/users.service';

// Interfaces
import { User } from '../../models/user';
import { FormInputOutput } from 'src/app/shared/components/form/models/form-input-output';

@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class UsersListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  pageTitle: string;

  activatedRouteSubscription: Subscription;

  form: FormGroup;

  users = new MatTableDataSource<User>([]);
  usersLoading: boolean;
  usersEmpty: boolean;

  expandedUser: User | null;

  columnsToDisplay = ['id', 'name', 'detail'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private browserTitleService: BrowserTitleService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.pageTitle = 'Users';
    this.browserTitleService.setTitle(this.pageTitle);
    this.setFormFilter();
  }

  setFormFilter(): void {
    const formValue: any = this.checkRouterParams();

    this.form = this.formBuilder.group({
      name: [formValue.name],
      email: [formValue.email, [Validators.email]],
    });
  }

  checkRouterParams(): Object {
    let formValue = {
      name: null,
      email: null,
    };

    this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        let params = null;

        if (Object.keys(queryParams).length > 0) {
          params = atob(queryParams['q']);
          params = JSON.parse(params);

          Object.keys(formValue).forEach((formKey) => {
            Object.keys(params).forEach((paramKey) => {
              if (
                formKey == paramKey &&
                formValue[formKey] != params[paramKey]
              ) {
                formValue[formKey] = params[paramKey];
              }
            });
          });
        }

        this.search(params);
      }
    );
    this.activatedRouteSubscription.unsubscribe();

    return formValue;
  }

  onFilter(): void {
    if (this.form.valid) {
      this.setRouterParams(this.getFormValue());
    }
  }

  getFormValue(): Object | null {
    let params: any = {};

    if (this.form.value.name) {
      params.name = this.form.value.name;
    }

    if (this.form.value.email) {
      params.email = this.form.value.email;
    }

    return Object.keys(params).length > 0 ? params : null;
  }

  setRouterParams(params: any): void {
    const queryParams = params ? { q: btoa(JSON.stringify(params)) } : {};

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
    });

    this.search(params);
  }

  search(params: any): void {
    this.users = new MatTableDataSource([]);
    this.usersLoading = true;
    this.usersEmpty = false;

    this.usersService
      .getUsers(params)
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.usersLoading = false;
          }, 1000);
        })
      )
      .subscribe(
        (response: User[]) => {
          if (response.length > 0) {
            this.users = new MatTableDataSource<User>(response);
            this.users.sort = this.sort;
          } else {
            this.usersEmpty = true;
          }
        },
        (error) => {
          this.usersEmpty = true;
        }
      );
  }

  formValueChanged(e: FormInputOutput): void {
    this.form.controls[e.fieldName].setValue(e.value);
  }
}
