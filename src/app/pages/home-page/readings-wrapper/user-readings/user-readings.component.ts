import { Component } from '@angular/core';
interface Reading{
  title:string,
  value:number
}
@Component({
  selector: 'app-user-readings',
  templateUrl: './user-readings.component.html',
  styleUrls: ['./user-readings.component.css']
})
export class UserReadingsComponent {
  readings:Reading[]=[
    {title:"reading 1", value:254},
    {title:"reading 2", value:120},
    {title:"reading 3", value:25},
  ]

}
