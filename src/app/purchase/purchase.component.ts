import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User, FoodBusiness, FoodMenu } from '../_models/index';
import {UserService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'purchase.component.html'
})

export class PurchaseComponent implements OnInit, OnDestroy{
    model : FoodMenu ;
    quantity : number;
    currentUser : User;
    private sub: any;

    constructor(private route: ActivatedRoute,private router: Router, private userService: UserService) {
        
    }

    buyMenu(): void {   
        this.model.maximumSaleQuantity-=this.quantity;
        this.router.navigate(['/allMenues']);
    }
   
   ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
       this.model = params['menuToBuy']; 

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}