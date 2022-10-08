import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
  features:any[]=[
    {id:1,name:'coffee1',price:'100g $999',background: 'Processing',src:'assets/img/bean1.jpg',page:'danger'},
    {id:2,name:'coffee2',price:'100g $999',background: 'Completed',src:'assets/img/bean2.jpg',page:'success'},
    {id:3,name:'coffee3',price:'100g $999',background: 'Completed',src:'assets/img/bean3.jpg',page:'success'},
    {id:4,name:'coffee4',price:'100g $999',background: 'Processing',src:'assets/img/bean4.jpg',page:'danger'},
    {id:5,name:'coffee5',price:'100g $999',background: 'Completed',src:'assets/img/bean5.jpg',page:'success'},
    {id:6,name:'coffee6',price:'100g $999',background: 'Completed',src:'assets/img/bean6.webp',page:'success'}
  ]
  constructor() {}

  ngOnInit() {
  }

}
