import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
 constructor(private translate: TranslateService) {
        translate.addLangs(["en", "es"]);
        translate.setDefaultLang('es');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'es');
    }
 }