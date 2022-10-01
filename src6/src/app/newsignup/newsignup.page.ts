import { Component, OnInit } from '@angular/core';
import { IonLoaderService } from '../ion-loader.service';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newsignup',
  templateUrl: './newsignup.page.html',
  styleUrls: ['./newsignup.page.scss'],
})
export class NewsignupPage implements OnInit {
  email:any;
  password:any;
  data:any;
  contactForm = new FormGroup({
    reEmail: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    rePassword: new FormControl('', [Validators.required,Validators.minLength(4)]),
    rePassword2: new FormControl('', [Validators.required,Validators.minLength(4)]),
    reSurname: new FormControl('', [Validators.required,Validators.minLength(3)]),
    reGivenname: new FormControl('', [Validators.required,Validators.minLength(3)])
  });
  constructor(private ionLoaderService: IonLoaderService,
    public alertController:AlertController) { }
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
  submitForm() {
    this.ionLoaderService.customLoader();
    console.log(this.data);
    console.log(this.contactForm.value.reEmail);
    console.log(this.contactForm.value.rePassword);
    console.log(this.contactForm.value.reSurname);
    console.log(this.contactForm.value.reGivenname);
    let surname = this.contactForm.value.reSurname;
    let givenname = this.contactForm.value.reGivenname;
    let email = this.contactForm.value.reEmail;
    let pwd = this.contactForm.value.rePassword;
    console.log(surname);
    this.data.push({surname,givenname,email,pwd});
    console.log(this.data);
    let userFullname = `${surname} ${givenname}`;
    this.presentAlert(userFullname);
  }
  async presentAlert(userFullname){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header: 'Hello!',
      subHeader: userFullname,
      message: 'Register success.',
      buttons:['OK']
    });
    await alert.present();
   }
  ngOnInit() {
    fetch('./assets/data/data.json').then(res=>res.json())
    .then(json=>{
      this.data = json;
    });
  }

}
