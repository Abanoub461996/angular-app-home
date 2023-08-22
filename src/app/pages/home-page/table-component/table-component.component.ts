import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
interface File {
  name: string;
  type: string;
}
interface User {
  id: string;
  arName: string;
  enName: string;
  email: string;
  workingDays?: any;
  files: any;
}

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent {
  lang!: string;
  users!: User[];
  tableHeaders!: string[];
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    // users=[]
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
    if (this.lang == 'ar') {
      this.tableHeaders = [
        'Id No',
        'Full Name',
        'Email',
        'Working Days',
        'File',
      ];
    } else {
      this.tableHeaders = [
        'Id No',
        'Full Name',
        'Email',
        'Working Days',
        'File',
      ];
    }
  }
}
