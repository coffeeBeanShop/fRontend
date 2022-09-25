import { Component, OnInit } from '@angular/core';
import { IonLoaderService } from '../ion-loader.service';

@Component({
  selector: 'app-newsignup',
  templateUrl: './newsignup.page.html',
  styleUrls: ['./newsignup.page.scss'],
})
export class NewsignupPage implements OnInit {
  email:any;
  password:any;
  constructor(private ionLoaderService: IonLoaderService) { }
  displayAutoLoader(){
    this.ionLoaderService.autoLoader();
  }
  showLoader(){
    this.ionLoaderService.simpleLoader();
  }
  hideLoader(){
    this.ionLoaderService.dismissLoader();
  }
  customizeLoader(){
    this.ionLoaderService.customLoader();
  }
  ngOnInit() {
  }

}
