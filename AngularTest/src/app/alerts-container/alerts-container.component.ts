import { Component, SimpleChanges, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts-container',
  templateUrl: './alerts-container.component.html',
  styleUrls: ['./alerts-container.component.scss']
})
export class AlertsContainerComponent implements OnChanges, OnInit {
  @Input() alerts: string[] = [];

  alerts2: string[] = ['lorem', 'ipsum', 'dolor'];

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes', changes);
  }

  ngOnInit() {
    setInterval(() => {
      this.alerts2.push('Lorem uipsssss');
    }, 1000)
  }

}
