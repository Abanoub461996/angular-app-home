import { Component, Input, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
// table
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {MatTooltipModule} from '@angular/material/tooltip';
interface UserFile {
  type: string;
  size: number;
  name: string;
  url: string;
}
export interface PeriodicElement {
  name: string;
  id?: string;
  work: {work:boolean}[];
  email: string;
  file: UserFile;
}

const ELEMENT_DATA_EN: PeriodicElement[] = [
  {
    id: 'ID-15877',
    name: 'Hydrogen',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'image.png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Helium',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'pdf.pdf',
      type: 'pdf',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Lithium',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'image.png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Beryllium',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'image.png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Boron',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'image.png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Carbon',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'pdf.pdf',
      type: 'pdf',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Nitrogen',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'pdf.pdf',
      type: 'pdf',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Oxygen',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'image.png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Fluorine',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'image.png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'Neon',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'image.png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
];
const ELEMENT_DATA_AR: PeriodicElement[] = [
  {
    id: 'ID-15877',
    name: 'إسم إفتراضي جديد مثال',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'واجهة المستخدم .png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'كتالوج الشركة.pdf',
      type: 'pdf',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'إسم إفتراضي جديد مثال',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'واجهة المستخدم .png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'واجهة المستخدم .png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'واجهة المستخدم .png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'كتالوج الشركة.pdf',
      type: 'pdf',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'كتالوج الشركة.pdf',
      type: 'pdf',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'واجهة المستخدم .png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'واجهة المستخدم .png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
  {
    id: 'ID-15877',
    name: 'اسم إفتراضي جديد',
    work: [{work:true},{work:false},{work:true},{work:true},{work:true},{work:true},{work:false}],
    email: 'Example@company.com',
    file: {
      name: 'واجهة المستخدم .png',
      type: 'image',
      url: 'https://picsum.photos/200',
      size: 9,
    },
  },
];
const DAYS_EN:string[]=['s','s','m','t','w','t','f']
const DAYS_AR:string[]=['س','ح','ن','ث','ع','خ','ج']

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
  standalone: true,
  imports: [MatButtonModule, NgFor, MatTableModule, BrowserModule,MatButtonModule, MatTooltipModule],
})
export class TableComponentComponent {
  lang!: string;
  tableHeaders!: string[];
  displayedColumns: { name: string; value: string }[] = [
    { name: 'Id No', value: 'id' },
    { name: 'Full Name', value: 'name' },
    { name: 'Email', value: 'email' },
    { name: 'Working Days', value: 'work' },
    { name: 'File', value: 'file' },
    { name: 'actions', value: 'actions' },
  ];
  columnsToDisplay!: { name?: string; value: string }[];
  columnIds!: string[];
  data!: PeriodicElement[];
  days!:string[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
      console.log(this.lang);
      if (this.lang == 'ar') {
        this.displayedColumns = [
          { name: 'رقم ال id', value: 'id' },
          { name: 'الاسم بالكامل', value: 'name' },
          { name: 'البريد الإلكتروني', value: 'email' },
          { name: 'ايام العمل', value: 'work' },
          { name: 'الملفات', value: 'file' },
          { name: 'اختيارات', value: 'actions' },
        ];
        this.data = ELEMENT_DATA_AR;
        this.days= DAYS_AR;
      } else {
        this.displayedColumns = [
          { name: 'Id No', value: 'id' },
          { name: 'Full Name', value: 'name' },
          { name: 'Email', value: 'email' },
          { name: 'Working Days', value: 'work' },
          { name: 'File', value: 'file' },
          { name: 'Actions', value: 'actions' },
        ];
        this.data = ELEMENT_DATA_EN;
        this.days= DAYS_EN;

      }
      this.columnsToDisplay == this.displayedColumns.slice();
      this.columnIds = this.displayedColumns.map((column) => column.name);
    });
  }
  addColumn() {
    const randomColumn = Math.floor(
      Math.random() * this.displayedColumns.length
    );
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
}
