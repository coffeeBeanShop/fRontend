import { Injectable } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  constructor(public loadingController:LoadingController) { }
  simpleLoader(){
    this.loadingController.create({
      message:'Login Success!',
      duration:2000
    }).then((response)=>{
      response.present();
    });
  }
  dismissLoader(){
    this.loadingController.dismiss().then((response)=>{
      console.log('Loader closed!', response);
    }).catch((err)=>{
      console.log('Error occured:',err);
    });
  }
  autoLoader(){
    this.loadingController.create({
      message:'Loader hides after 3 seconds',
      duration: 3000
    }).then((response)=>{
      response.present();
      response.onDidDismiss().then((response)=>{
        console.log('Loader dismissed',response);
      });
    });
  }
  customLoader(){
    this.loadingController.create({
      message:'',
      duration: 300,
      cssClass: 'loader-css-class',
      backdropDismiss:true,
    }).then((res)=>{
      res.present();
    });
  }
}
