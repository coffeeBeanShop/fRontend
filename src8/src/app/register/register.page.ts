import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  btnClick(){
    alert('Data Base 404!')
  }
  constructor() { }

  ngOnInit() {
  }

}
