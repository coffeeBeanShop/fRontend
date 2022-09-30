import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tab5Page } from './tab5.page';

import { tab5PageRoutingModule } from './tab5-routing.module';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: tab5Page }]),
    tab5PageRoutingModule,
  ],
  declarations: [tab5Page,HeaderComponent]
})
export class tab5PageModule {}
