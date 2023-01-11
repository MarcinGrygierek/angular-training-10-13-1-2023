import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  tasks: Task[] = [];

  public handleTaskDelete = (taskId: string) => {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }

  ngOnInit(): void {
    this.tasks = [
      new Task('test'),
      new Task('lorem ipsum'),
    ]
  }
}
