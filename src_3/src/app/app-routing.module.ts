import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupPageModule)
      }
    ]
  },
  {
    path: 'newsignup',
    loadChildren: () => import('./newsignup/newsignup.module').then( m => m.NewsignupPageModule)
  },
  {
    path: 'newlogin',
    loadChildren: () => import('./newlogin/newlogin.module').then( m => m.NewloginPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
