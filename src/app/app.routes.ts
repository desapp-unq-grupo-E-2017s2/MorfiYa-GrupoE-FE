import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CreateFoodBusinessComponent } from './createFoodBusiness/index';
import { CreateFoodMenuComponent } from './createFoodMenu/index';
import { AllMenuesComponent } from './allMenues/index';
import { PurchaseComponent} from './purchase/index';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
    { path: 'createFoodBusiness', component: CreateFoodBusinessComponent },
    { path: 'createMenu' , component: CreateFoodMenuComponent},
    { path: 'allMenues' , component: AllMenuesComponent}, 
    { path: 'purchase' , component: PurchaseComponent}, 

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
  
];
