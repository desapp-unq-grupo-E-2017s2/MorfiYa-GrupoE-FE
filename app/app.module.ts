import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent, ModalComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, ModalService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { CreateFoodBusinessComponent } from './createFoodBusiness/index';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "i18n/", ".json");
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
         TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ModalComponent,
        CreateFoodBusinessComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ModalService,

        // providers used to create fake backend
        /*fakeBackendProvider,
        MockBackend,
        BaseRequestOptions*/
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }