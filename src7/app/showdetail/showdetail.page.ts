import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdetail',
  templateUrl: './showdetail.page.html',
  styleUrls: ['./showdetail.page.scss'],
})
export class ShowdetailPage implements OnInit {
  selectedSize:number;
  selectedship:number;
  activeVariation:string;
  features:any[]=[
    {id:1,name:'Orange',place:'Place',price:'HK$30/100g',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean1.jpg',page:''}
      ]
  constructor() {}
  ngOnInit() {
    this.activeVariation='size';
  }
  segmentChanged(e:any){
    this.activeVariation=e.detail.value;
  }
  changeSize(size:number){
    this.selectedSize=size;
  }
  changeship(ship:number){
    this.selectedship=ship;
  }
}
