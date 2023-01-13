import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { User } from './interfaces/user';
import { Country } from './test.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  alerts: string[] = [];
  poland: Country = {
    code: 'PL',
    name: 'Polska'
  }

  user: User = {
    name: 'Marcin',
    surname: 'Grygierek',
    tel: '+48123123123',
    email: 'email@example.com'
  }

  handleNewAlert = (alert: string) => {
    this.alerts = [...this.alerts, alert];
  }

  ngOnInit(): void {
    const obs = from([1993, 2005, 1998, 1978, 2010, 2000]);
    const currentYear = new Date().getFullYear();

    obs
      .pipe(
        map(year => currentYear - year),
        tap(age => console.log(`Wiek: ${age}`)),
        filter(age => age >= 18)
      )
      .subscribe(val => { console.log(val) })
  }

}
