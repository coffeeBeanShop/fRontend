import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: './home', icon: 'home' },
    { title: 'Favorites', url: './favorites', icon: 'heart' },
    { title: 'Buy', url: './showpage', icon: 'paper-plane' },
    { title: 'Showdetails', url: '/showdetail', icon: 'archive' },
    { title: 'Login', url: '/login', icon: 'warning' },
    { title: 'Register', url: '/register', icon: 'warning' },
    { title: 'Editpage', url: '/editpage', icon: 'trash' },
    { title: 'Confirmpage', url: './confirmpage', icon: 'paper-plane' },
    { title: 'Process', url: '/process', icon: 'paper-plane' },
    { title: 'Payment', url: '/payment', icon: 'paper-plane' },
    { title: 'Order', url: '/order', icon: 'paper-plane' },
    { title: 'Orderfinish', url: '/Orderfinish', icon: 'paper-plane' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
