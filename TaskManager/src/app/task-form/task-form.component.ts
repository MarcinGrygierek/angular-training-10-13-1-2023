import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskForm!: FormGroup;

  @Output()
  onNewTask = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  public handleSubmit = () => {
    // const title = this.taskForm.get('title')?.value;
    // const title = this.taskForm.controls.title.value;
    const title = this.taskForm.value.title;

    this.onNewTask.emit(title);
    this.taskForm.reset();
  }
}
