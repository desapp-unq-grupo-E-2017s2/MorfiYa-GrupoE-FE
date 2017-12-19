import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, FoodBusiness, FoodMenu } from '../_models/index';
import {UserService} from '../_services/index';
import {Ng2PaginationModule} from 'ng2-pagination';


@Component({
    moduleId: module.id,
    templateUrl: 'allMenues.component.html'
})

export class AllMenuesComponent {
    currentUser: User;
    allMenues: Array<FoodMenu>;
    selectedCategory: string;        

    constructor(private router: Router, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.allMenues = this.allFoodMenues();
    }

    allFoodMenues():Array<FoodMenu> {
       return this.currentUser.business.menues;
    }  
    
    menues():Array<FoodMenu>{
        return this.allMenues
    }

    menuesOfCategory():void{
        var filteredMenues = Array<FoodMenu>();
        for(var i =0; i<this.allFoodMenues.length; i++ ){
            if(this.allFoodMenues[i].category == this.selectedCategory){
                filteredMenues.push(this.allFoodMenues[i]);
            }
        }
        this.allMenues = filteredMenues;
    }
}