import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
interface Reading {
  title: string;
  value: number;
}
interface Period {
  enName: string;
  arName: string;
  value: string;
  id: number;
}
@Component({
  selector: 'app-user-readings',
  templateUrl: './user-readings.component.html',
  styleUrls: ['./user-readings.component.css'],
})
export class UserReadingsComponent {
  periods: Period[] | undefined;
  public lang!: string;
  selectedPeriod: Period | undefined;
  readings: Reading[] = [
    { title: 'reading 1', value: 254 },
    { title: 'reading 2', value: 120 },
    { title: 'reading 3', value: 25 },
  ];
  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.periods = [
      {
        arName: '10 مايو - 10 يونيو',
        enName: '10 may - 10 june',
        value: 'NY',
        id: 1,
      },
      {
        arName: '10 يونيو - 10 يوليو',
        enName: '10 june - 10 july',
        value: 'RM',
        id: 2,
      },
      {
        arName: '10 يوليو - 10 أغسطس',
        enName: '10 july - 10 aug',
        value: 'LDN',
        id: 3,
      },
      {
        arName: '10 أغسطس - 10 سبتمبر',
        enName: '10 aug - 10 sep',
        value: 'IST',
        id: 4,
      },
    ];
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }
  getDropDownName(): string {
    if (this.lang == 'ar') {
      return 'arName';
    } else {
      return 'enName';
    }
  }
}
