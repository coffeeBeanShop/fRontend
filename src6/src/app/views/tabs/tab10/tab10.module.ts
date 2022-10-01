import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab10Page } from './tab10.page';

import { Tab10PageRoutingModule } from './tab10-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab10Page }]),
    Tab10PageRoutingModule,
  ],
  declarations: [Tab10Page,HeaderComponent]
})
export class Tab10PageModule {}
