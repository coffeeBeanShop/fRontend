import { Component, OnInit } from '@angular/core';
import { IonLoaderService } from '../ion-loader.service';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.page.html',
  styleUrls: ['./newlogin.page.scss'],
})

export class NewloginPage implements OnInit {
  data:any;
  contactForm = new FormGroup({
    loginEmail: new FormControl('', Validators.required),
    loginPassword: new FormControl('', Validators.required)
  });
  constructor(private ionLoaderService: IonLoaderService,
    public formBuilder: FormBuilder) {
     }
  submitForm() {
    console.log(this.contactForm.value.loginEmail);
    console.log(this.contactForm.value.loginPassword);
    console.log(this.data.length);
    console.log(this.data);
    for(var i=0;i<this.data.length;i++){
      var tryLoginemail = this.contactForm.value.loginEmail;
      var tryPassword = this.contactForm.value.loginPassword;
      var dbemail = this.data[i].email;
      var dbpwd = this.data[i].pwd;
      if(dbemail==tryLoginemail && dbpwd==tryPassword){
          console.log("Login Success");
          console.log(this.data[i].surname+" "+this.data[i].givenname)
          break;
        }else{
          console.log("Login Fail");
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
