import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewloginPageRoutingModule } from './newlogin-routing.module';

import { NewloginPage } from './newlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewloginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewloginPage]
})
export class NewloginPageModule {}
