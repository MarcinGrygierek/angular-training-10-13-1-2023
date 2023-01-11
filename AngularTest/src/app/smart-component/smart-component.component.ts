import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-component',
  templateUrl: './smart-component.component.html',
  styleUrls: ['./smart-component.component.scss']
})
export class SmartComponentComponent implements OnInit, OnDestroy {
  interval: any;
  constructor() {
    this.interval = null;
   }

  ngOnInit(): void {
    console.log('Mounted');

    this.interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('DESTORY');
    clearInterval(this.interval);
  }

}
