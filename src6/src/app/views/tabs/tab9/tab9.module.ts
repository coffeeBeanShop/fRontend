import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab9Page } from './tab9.page';

import { Tab9PageRoutingModule } from './tab9-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab9Page }]),
    Tab9PageRoutingModule,
  ],
  declarations: [Tab9Page,HeaderComponent]
})
export class Tab9PageModule {}
