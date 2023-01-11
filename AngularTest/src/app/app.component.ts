import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  alerts: string[] = [];

  user: User = {
    name: 'Marcin',
    surname: 'Grygierek',
    tel: '+48123123123',
    email: 'email@example.com'
  }

  handleNewAlert = (alert: string) => {
    this.alerts = [...this.alerts, alert];
  }

}
