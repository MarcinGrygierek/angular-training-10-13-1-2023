import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {
  @Input() group!: FormGroup;
  @Input() name!: string;

  getErrors = (): null | ValidationErrors => {
    const field = this.group.get(this.name);

    if (!field || !field.errors || !field.touched) return {};
    return field.errors;
  }
}
