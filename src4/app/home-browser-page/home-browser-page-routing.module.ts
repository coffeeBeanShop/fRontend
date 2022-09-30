import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBrowserPagePage } from './home-browser-page.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBrowserPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBrowserPagePageRoutingModule {}
