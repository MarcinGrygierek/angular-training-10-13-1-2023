import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { FieldErrorsComponent } from './field-errors/field-errors.component';



@NgModule({
  declarations: [
    InputComponent,
    FieldErrorsComponent
  ],
  exports: [
    InputComponent, 
    FieldErrorsComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
