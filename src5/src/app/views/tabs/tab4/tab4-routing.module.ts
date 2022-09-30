import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: tab4Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tab4PageRoutingModule {}
