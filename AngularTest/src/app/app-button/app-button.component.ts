import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {

  @Input()
  text!: string;

  @Input()
  onClick!: Function;

  handleClick() {
    this.onClick();
  } 

}
