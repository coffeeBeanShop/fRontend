import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBrowserPagePageRoutingModule } from './home-browser-page-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { HomeBrowserPagePage } from './home-browser-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBrowserPagePageRoutingModule
  ],
  declarations: [HomeBrowserPagePage,HeaderComponent]
})
export class HomeBrowserPagePageModule {}
