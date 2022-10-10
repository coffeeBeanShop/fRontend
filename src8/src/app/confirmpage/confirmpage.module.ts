import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmpagePageRoutingModule } from './confirmpage-routing.module';

import { ConfirmpagePage } from './confirmpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmpagePageRoutingModule
  ],
  declarations: [ConfirmpagePage]
})
export class ConfirmpagePageModule {}
