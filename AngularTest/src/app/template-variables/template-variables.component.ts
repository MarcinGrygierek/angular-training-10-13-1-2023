import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss'],
})
export class TemplateVariablesComponent implements OnInit {
  alerts: string[] = ['lorem', 'ipsum', 'dolor'];

  constructor() { }

  addAlert() {
    this.alerts.push('lorem ipsum');
  }

  ngOnInit(): void {
  }

}
