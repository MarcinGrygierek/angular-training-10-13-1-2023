import { Component, SimpleChanges, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-alerts-container',
  templateUrl: './alerts-container.component.html',
  styleUrls: ['./alerts-container.component.scss']
})
export class AlertsContainerComponent implements OnChanges {
  @Input() alerts: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes', changes);
  }

}
