import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
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
  constructor() { }

  ngOnInit() {
  }
  option = {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,

    

  }

}