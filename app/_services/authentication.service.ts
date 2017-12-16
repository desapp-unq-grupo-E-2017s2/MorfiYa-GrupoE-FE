import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


const URL = 'http://localhost:1710/authentication';

@Injectable()
export class AuthenticationService {


    constructor(private http: Http) { }


 login(email: string, password: string) {
    this.auth0.authorize();
       return this.http.post(URL, JSON.stringify({ email: email, password: password }))
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

   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}