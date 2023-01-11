import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent implements OnInit, OnDestroy {

interval: any;
value: number = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.value = Math.round(Math.random() * 1000);
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
