import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, FoodBusiness } from '../_models/index';
import {UserService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'createFoodBusiness.component.html'
})

export class CreateFoodBusinessComponent {
    currentUser: User;
    model : FoodBusiness={};

    constructor(private router: Router, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    addFoodBusinessToCurrentUser(): void {
        this.currentUser.business = this.model;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.userService.update(this.currentUser);
        this.router.navigate(['/']);
    }

  
    
}