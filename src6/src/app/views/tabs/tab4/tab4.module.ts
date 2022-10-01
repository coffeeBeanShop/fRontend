import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tab4Page } from './tab4.page';

import { tab4PageRoutingModule } from './tab4-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: tab4Page }]),
    tab4PageRoutingModule,
  ],
  declarations: [tab4Page,HeaderComponent]
})
export class tab4PageModule {}
