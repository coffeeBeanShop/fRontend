import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsignupPageRoutingModule } from './newsignup-routing.module';

import { NewsignupPage } from './newsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsignupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewsignupPage]
})
export class NewsignupPageModule {}
