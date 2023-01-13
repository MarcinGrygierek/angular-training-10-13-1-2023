import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';
import { delay, endWith, map, mergeMap, startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Observable vs Promise
    // const prms = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve('Sukces');
    //   }, 2000)
    // });

    // const obs = new Observable((observator) => {
    //   setTimeout(() => {
    //     observator.next('Sukces')
    //   }, 2000)
    // })

    // obs.subscribe(res => { console.log('Observable 1', res) });

    // setTimeout(() => {
    //   obs.subscribe(res => { console.log('Observable 2', res) });
    //   prms.then(res => { console.log('Promise', res) });
    // }, 2500)

    // Ciągłe źródło
    // const obs = new Observable((observer) => {
    //   let counter = 0;
    //   const interval = setInterval(() => {
    //     observer.next(counter++);
    //   }, 1000)

    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //     },
    //   }
    // })

    // obs.subscribe(res => {
    //   console.log('Observable 1', res);
    // })

    // setTimeout(() => {
    //   obs.subscribe(res => {
    //     console.log('Observable 2', res);
    //   })
    // }, 2000)

    const tab = [1, 2, 3, 4, 5];
    const obs1 = of(...tab);
    const obs2 = from(tab);

    // obs1.subscribe(val => console.log('Of', val));
    // obs2.subscribe(val => console.log('From', val));

    obs1.pipe(
      map(el => of(el)
        .pipe(
          delay(Math.random() * 5000)
        )
      ),
      mergeMap(el => el)
    ).subscribe(val => {
      console.log('Of', val);
    })

    interval(500)
      .pipe(
        startWith(999),
        tap(val => console.log('Side effect for', val)),
        takeUntil(timer(Math.random() * 3000 + 1000)),
        endWith(1000)
      )
      .subscribe(val => console.log('Interval', val));
  }


}
