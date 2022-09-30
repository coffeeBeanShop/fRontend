import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages = [
    {
      title: 'tab1',
      url: '/tabs/tab1',
      icon: 'person'
    },
    {
      title: 'tab2',
      url: '/tabs/tab2',
      icon: 'log-in'
    },
    {
      title: 'tab3',
      url: '/tabs/tab3',
      icon: 'information-circle'
    },
    {
      title: 'home-browser-page',
      url: '/home-browser-page',
      icon: 'Home'
    },
    {
      title: 'Tab4',
      url: '/tabs/tab4',
      icon: 'log-in'
    },
    {
      title: 'Tab5',
      url: '/tabs/tab5',
      icon: 'log-in'
    },
    {
      title: 'Tab6',
      url: '/tabs/tab6',
      icon: 'log-in'
    },
    {
      title: 'Tab7',
      url: '/tabs/tab7',
      icon: 'log-in'
    },
    {
      title: 'Tab8',
      url: '/tabs/tab8',
      icon: 'log-in'
    },
    {
      title: 'Tab9',
      url: '/tabs/tab9',
      icon: 'log-in'
    },
    {
      title: 'Tab10',
      url: '/tabs/tab10',
      icon: 'log-in'
    },
    {
      title: 'Tab11',
      url: '/tabs/tab11',
      icon: 'log-in'
    }
  ];
  constructor() { }
}
