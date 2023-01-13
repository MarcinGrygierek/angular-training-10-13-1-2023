import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
import { TaskTimePipe } from './task-time.pipe';



@NgModule({
  declarations: [
    InputComponent,
    FieldErrorsComponent,
    TaskTimePipe
  ],
  exports: [
    InputComponent, 
    FieldErrorsComponent,
    ReactiveFormsModule,
    TaskTimePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
