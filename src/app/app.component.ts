import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  searchText: string = '';
  contactList: any = [
    {
      "id": 1,
      "name": "Sushma Uttam",
      "img": ""
    },
    {
      "id": 2,
      "name": "Varun Uttam",
      "img": ""
    },
    {
      "id": 3,
      "name": "Datta Bhairi",
      "img": ""
    }
  ];
}
