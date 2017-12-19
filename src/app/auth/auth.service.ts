import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import { AlertService} from '../_services/index';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as auth0 from 'auth0-js';
import 'rxjs/add/operator/map'

const URL = 'http://localhost:1710/authentication';

@Injectable()
export class AuthService {

  userProfile: any;
  
  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: 'openid profile'
  });

  constructor(public router: Router, private http: Http, private alertService: AlertService) {}

  public login(): void {
    this.auth0.authorize();
  }

public loginWithGoogleProfile(){
	return this.http.post(URL, JSON.stringify(this.userProfile))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
}

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.loadProfile();
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

   public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  private loadProfile() {
        
    
      this.getProfile((err, profile) => {
        this.userProfile = profile;
        this.loginOrRegisterUser();
      });
    }

    loginOrRegisterUser(){
    this.loginWithGoogleProfile().subscribe(
                data => {
                    this.alertService.success('Logueo con Google exitoso!', true);
                    //localStorage.setItem('currentUser',JSON.parse(data._body) );
                   
                },
                error => {
                    this.alertService.error(error);
                });

  }

}
