import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: TasksService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  public handleSubmit = () => {
    // const title = this.taskForm.get('title')?.value;
    // const title = this.taskForm.controls.title.value;
    const title = this.taskForm.value.title;

    this.tasksService.handleNewTask(title);
    this.taskForm.reset();
  }
}
