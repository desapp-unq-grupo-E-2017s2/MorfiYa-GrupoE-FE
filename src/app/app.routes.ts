import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CreateFoodBusinessComponent } from './createFoodBusiness/index';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
    { path: 'createFoodBusiness', component: CreateFoodBusinessComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
  
];
