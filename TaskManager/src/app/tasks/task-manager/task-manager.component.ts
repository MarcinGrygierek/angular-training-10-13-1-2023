import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = [
      new Task('test'),
      new Task('lorem ipsum'),
    ]
  }

  public handleNewTask = (taskTitle: string) => {
    this.tasks = [...this.tasks, new Task(taskTitle)];
  }
}
