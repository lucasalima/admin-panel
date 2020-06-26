import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { RouterService } from 'src/app/shared/services/router.service';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  isDisabled: boolean = false;

  previousUrl: string;
  currentUrl: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.setRouter();
  }

  setRouter() {
    this.previousUrl = this.routerService.getPreviousUrl();
    this.currentUrl = this.routerService.getCurrentUrl();
    this.isDisabled = this.previousUrl === this.currentUrl ? true : false;
    this.onRouterChange();
  }

  onRouterChange() {
    this.router.events.subscribe((event) => {
      this.previousUrl = this.routerService.getPreviousUrl();
      this.currentUrl = this.routerService.getCurrentUrl();
      this.isDisabled = this.previousUrl === this.currentUrl ? true : false;
    });
  }

  onClick() {
    if (this.isDisabled) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
      });
    } else {
      this.location.back();
    }
  }
}
