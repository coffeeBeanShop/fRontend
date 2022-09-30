import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab11Page } from './tab11.page';

import { Tab11PageRoutingModule } from './tab11-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab11Page }]),
    Tab11PageRoutingModule,
  ],
  declarations: [Tab11Page,HeaderComponent]
})
export class Tab11PageModule {}
