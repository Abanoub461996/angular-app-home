import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ThemesService } from './core/services/themes.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task';
  textDir: string = 'ltr';

  constructor(private translateService: TranslateService, private theme: ThemesService) {
    this.translateService.use('en');
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        this.textDir = 'rtl';
      } else {
        this.textDir = 'ltr';
      }
    });
  }
  ngOnInit(){
    this.theme.setTheme('spotify');
    initFlowbite();
  }
}
