import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

const BASE_URL = 'http://localhost:1710/users';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(BASE_URL, this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(BASE_URL.concat('/'+id), this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(BASE_URL, user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
<<<<<<< HEAD:app/_services/user.service.ts
        var userId = user.id;
        return this.http.put(BASE_URL.concat('/'+userId), user, this.jwt()).map((response: Response) => response.json());
=======
        return this.http.put(BASE_URL.concat('/'+user.id), user, this.jwt()).map((response: Response) => response.json());
>>>>>>> auth0+Integracion:src/app/_services/user.service.ts
    }

    delete(id: number) {
        return this.http.delete(BASE_URL.concat('/'+id), this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token, 'Acess-Controll-Allow-Origin': '*' });
            return new RequestOptions({ headers: headers });
        }
    }
}
