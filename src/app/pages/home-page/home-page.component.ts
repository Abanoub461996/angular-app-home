import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

// components
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private translateService: TranslateService) {}
  changeLanguage(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
