import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderfinishPageRoutingModule } from './orderfinish-routing.module';

import { OrderfinishPage } from './orderfinish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderfinishPageRoutingModule
  ],
  declarations: [OrderfinishPage]
})
export class OrderfinishPageModule {}
