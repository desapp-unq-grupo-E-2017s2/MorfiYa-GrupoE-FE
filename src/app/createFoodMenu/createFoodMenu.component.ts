import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, FoodBusiness, FoodMenu } from '../_models/index';
import {UserService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'createFoodMenu.component.html'
})

export class CreateFoodMenuComponent {
    currentUser: User;
    model : FoodMenu = new FoodMenu() ;

    constructor(private router: Router, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(!this.currentUser.business.menues){
            this.currentUser.business.menues = Array<FoodMenu>();
        }
    }

    addFoodMenuToCurrentUser(): void {   
        this.currentUser.business.menues.push(this.model);
        this.userService.update(this.currentUser);
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.router.navigate(['/']);
    }   
}