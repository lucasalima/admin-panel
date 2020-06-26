import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { BrowserTitleService } from 'src/app/shared/services/browser-title.service';

// Interfaces
import { User } from '../../models/user';

@Component({
  selector: 'users-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class UsersDetailComponent implements OnInit {
  pageTitle: string;

  user: User;

  companyBs: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private browserTitleService: BrowserTitleService
  ) {}

  ngOnInit() {
    this.setUser();
  }

  setUser(): void {
    const resolver = this.activatedRoute.snapshot.data;

    this.user = resolver.details;
    this.setCompanyBusiness(this.user.company.bs);

    this.browserTitleService.setTitle(`${this.user.name}`);
    this.pageTitle = this.user.name;
  }

  setCompanyBusiness(business: string): void {
    this.companyBs = business.split(' ').map((bs) => bs);
  }
}
