import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.page.html',
  styleUrls: ['./editpage.page.scss'],
})
export class EditpagePage implements OnInit {

  btn_click(){
    alert('btn clicked')

    
  }
  btn_clickadd(){
    alert('btn add')
  }
  item_qty:any;
  features:any[]=[
    {id:1,name:'coffee1',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean1.jpg',page:'3'},
    {id:2,name:'coffee2',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean2.jpg',page:'2'},
    {id:3,name:'coffee3',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean3.jpg',page:'4'},
    {id:4,name:'coffee4',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean4.jpg',page:'1'},
    {id:5,name:'coffee5',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean5.jpg',page:'2'},
    {id:6,name:'coffee6',price:'100g $999',background: 'rbga(45,211,111,0.1)',src:'assets/img/bean6.webp',page:'5'}
  ]
  constructor() {this.item_qty=1;}
  inc(){
    this.item_qty += 1;
    console.log(this.item_qty + 1);
    }
    
    //decrements item
    
    dec(){
    if(this.item_qty-1 < 1){
      this.item_qty = 1;
      console.log('item_1->' + this.item_qty)
    }
    else{
      this.item_qty -= 1;
      console.log('item_2->' + this.item_qty);
    }
    }
    
  ngOnInit() {
  }

}
