import { Component } from '@angular/core';
interface File{
  name:string,
  type:string,

}
interface User{
  id:string,
  arName:string,
  enName:string,
  email:string,
  workingDays?:any,
  files:any;
}

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})

export class TableComponentComponent {

  users!: User[];

    constructor() {}

    ngOnInit() {
        // users=[]
    }

}
