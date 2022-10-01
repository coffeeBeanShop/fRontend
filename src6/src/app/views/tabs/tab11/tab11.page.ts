import { Component } from '@angular/core';

@Component({
  selector: 'app-tab11',
  templateUrl: 'tab11.page.html',
  styleUrls: ['tab11.page.scss']
})
export class Tab11Page {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
   slideOptsp = {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 7,
    grabCursor: true,
    spaceBetween: 2
    
  };
  slideOptsb = {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 7,
    grabCursor: true,
    spaceBetween: 2
    
  };
  slideOptsba = {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 7,
    grabCursor: true,
    spaceBetween: 2
    
  };
  constructor() {}

}
