import { Component, OnInit } from '@angular/core';
import { IonLoaderService } from '../ion-loader.service';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.page.html',
  styleUrls: ['./newlogin.page.scss'],
})

export class NewloginPage implements OnInit {
  data:any;
  contactForm = new FormGroup({
    loginEmail: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    loginPassword: new FormControl('', [Validators.required,Validators.minLength(8)])
  });
  constructor(private ionLoaderService: IonLoaderService,
    public formBuilder: FormBuilder,
    public alertController:AlertController,
    public toastController:ToastController) {}
  displayToast(userFullname) {
    this.toastController.create({
      header: 'Welcome',
      message: userFullname,
      position: 'top',
      cssClass: 'toast-custom-class',
      buttons: 
      [
        {
          side: 'end',
          icon: 'person',
          handler: ()=>{console.log('hi');}
        },
        {
          side:'end',
          text:'Close',
          role:'cancel',
          handler:()=>{console.log('');}
        }
      ]
        }).then((toast)=>{
          toast.present();
      });
      try{
        this.toastController.dismiss().then(()=>{
        }).catch(()=>{
        }).finally(()=>{
          console.log('Closed')
        });
      }catch(e){}
   }
    
    async presentAlert(userFullname){
      const alert = await this.alertController.create({
        cssClass:'my-custom-class',
        header:  'Hello!',
        subHeader: userFullname,
        message: 'Enjoy!',
        buttons:['OK']
      });
      await alert.present();
     }
     async presentAlert2(userFullname){
      const alert = await this.alertController.create({
        cssClass:'my-custom-class',
        header:  'Hello!',
        subHeader: userFullname,
        message: 'Try again',
        buttons:['OK']
      });
      await alert.present();
     }
  submitForm() {
    this.ionLoaderService.customLoader();

    console.log(this.contactForm.value.loginEmail);
    console.log(this.contactForm.value.loginPassword);
    console.log(this.data.length);
    console.log(this.data);
    for(var i=0;i<this.data.length;i++){
      let tryLoginemail = this.contactForm.value.loginEmail;
      let tryPassword = this.contactForm.value.loginPassword;
      let dbemail = this.data[i].email;
      let dbpwd = this.data[i].pwd;
      if(dbemail==tryLoginemail && dbpwd==tryPassword){
          console.log("Login Success");
          console.log(this.data[i].surname+" "+this.data[i].givenname);
          let userFullname = `Login Success ${this.data[i].surname+" "+this.data[i].givenname}`;
          this.displayToast(userFullname);
          this.presentAlert(userFullname);
          break;
        }else{
          if (i === this.data.length - 1) {
            // do your thing
            let userFullname = "Login Fail";
            this.presentAlert2(userFullname);
            console.log(userFullname);
          }
      }
    }
  }
  customizeLoader(){
    this.ionLoaderService.customLoader();
    console.log(this.data);
  }

  ngOnInit() {
    fetch('./assets/data/data.json').then(res=>res.json())
    .then(json=>{
      this.data = json;
    });

  }
}
