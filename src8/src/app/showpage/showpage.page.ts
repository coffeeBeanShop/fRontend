import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.page.html',
  styleUrls: ['./showpage.page.scss'],
})
export class ShowpagePage {
  features:any[]=[
    {id:1,name:'Orange',place:'Place',price:'HK$30/100g',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean1.jpg',page:''},
    {id:2,name:'Banana',place:'Place',price:'HK$30/100g',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean2.jpg',page:''},
    {id:3,name:'Fish',place:'Place',price:'HK$30/100g',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean3.jpg',page:''},
    {id:4,name:'Omega',place:'Place',price:'HK$30/100g',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean4.jpg',page:''},
    {id:5,name:'Chrome',place:'Place',price:'HK$30/100g',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean5.jpg',page:''},
    {id:6,name:'Moon',place:'Place',price:'HK$30/100g',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean6.webp',page:''}
  ]
  constructor() {}

  ngOnInit() {
  }

}
