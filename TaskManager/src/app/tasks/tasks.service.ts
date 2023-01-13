import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks$ = new BehaviorSubject<Task[]>([]);
  public tasks = this.tasks$.asObservable();

  public handleNewTask = (taskTitle: string) => {
    const tasks = this.tasks$.getValue();
    const newTasks = [...tasks, new Task(taskTitle)];
    this.tasks$.next(newTasks);
  }
}
