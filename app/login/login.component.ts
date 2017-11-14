import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

// Google's login API namespace
declare var gapi:any;

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  googleLoginButtonId = "google-login-button";
  userAuthToken = null;
  userDisplayName = "empty";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  // Angular hook that allows for interaction with elements inserted by the
    // rendering of a view.
    ngAfterViewInit() {
      // Converts the Google login button stub to an actual button.
      gapi.signin2.render(
        this.googleLoginButtonId,
        {
          "onSuccess": this.onGoogleLoginSuccess,
          "scope": "profile",
          "theme": "dark"
        });
    }

    // Triggered after a user successfully logs in using the Google external
    // login provider.
    onGoogleLoginSuccess(loggedInUser) {
      this.userAuthToken = loggedInUser.getAuthResponse().id_token;
      this.userDisplayName = loggedInUser.getBasicProfile().getName();
      console.log(this);
    }
}
