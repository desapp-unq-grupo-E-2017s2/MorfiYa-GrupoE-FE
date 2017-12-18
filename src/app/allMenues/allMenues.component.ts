import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, FoodBusiness, FoodMenu } from '../_models/index';
import {UserService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'allMenues.component.html'
})

export class AllMenuesComponent {
    currentUser: User;
    allMenues: Array<FoodMenu>;

    constructor(private router: Router, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.allMenues = this.allFoodMenues();
    }

    allFoodMenues():Array<FoodMenu> {
       return this.currentUser.business.menues;
    }  
}