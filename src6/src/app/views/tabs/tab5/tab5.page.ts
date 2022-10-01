import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class tab5Page {
  features:any[]=[
    {id:1,name:'coffee1',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean1.jpg',page:''},
    {id:2,name:'coffee2',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean2.jpg',page:''},
    {id:3,name:'coffee3',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean3.jpg',page:''},
    {id:4,name:'coffee4',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean4.jpg',page:''},
    {id:5,name:'coffee5',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean5.jpg',page:''},
    {id:6,name:'coffee6',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean6.webp',page:''}
  ]
  constructor() {}

}
