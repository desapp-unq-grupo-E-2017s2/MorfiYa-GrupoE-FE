import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { ROUTES } from './app.routes';
import { AlertService, UserService} from './_services/index';
import { AuthService } from './auth/index';
import { CallbackComponent } from './callback/index';
import {Ng2PaginationModule} from 'ng2-pagination';
import { CreateFoodBusinessComponent } from './createFoodBusiness/index';
import { CreateFoodMenuComponent } from './createFoodMenu/index';
import { AllMenuesComponent } from './allMenues/index'; 
import { PurchaseComponent} from './purchase/index';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    CreateFoodBusinessComponent,
        CreateFoodMenuComponent,
        AllMenuesComponent,
        PurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    Ng2PaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [  AuthGuard,
                AuthService,
	             AlertService,
                UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
