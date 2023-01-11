import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent {
  @Output() onNewAlert = new EventEmitter<string>();

  generateNewAlert = () => {
    const alert = `LoremIpsum${new Date().getTime()}`;
    this.onNewAlert.emit(alert);
  }
}
