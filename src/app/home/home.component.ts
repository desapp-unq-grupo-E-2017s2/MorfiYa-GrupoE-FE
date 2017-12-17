import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { User } from '../_models/index';
import { UserService, AlertService} from '../_services/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   currentUser: User;
   profile: any;
    users: User[] = [];

    constructor(private userService: UserService, public router:Router,public auth: AuthService,private alertService: AlertService,) {}

  ngOnInit() {
  this.loadProfile();
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

 private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

private loadProfile() {
        
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.loginOrRegisterUser();
     
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.loginOrRegisterUser();
      });
    }
    }

    loginOrRegisterUser(){
    this.auth.loginWithEmail(this.profile.nickname+'@gmail.com').subscribe(
                data => {
                    this.alertService.success('Logueo con Google exitoso!', true);
                    localStorage.setItem('currentUser',JSON.parse(data._body) );
                   
                },
                error => {
                    this.alertService.error(error);
                });

  }
}
