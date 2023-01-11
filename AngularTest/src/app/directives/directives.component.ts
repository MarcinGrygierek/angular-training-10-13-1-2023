import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  isDisplayed: boolean = true;
}
