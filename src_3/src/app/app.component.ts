import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages = [
    {
      title: 'Contact',
      url: '/tabs/tab1',
      icon: 'person'
    },
    {
      title: 'Login',
      url: '/tabs/tab2',
      icon: 'log-in'
    },
    {
      title: 'About',
      url: '/tabs/tab3',
      icon: 'information-circle'
    }
  ];
  constructor() { }
}
