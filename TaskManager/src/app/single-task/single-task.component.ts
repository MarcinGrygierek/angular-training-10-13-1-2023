import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskStatus } from '../constants/task-status';
import { Task } from '../task/task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleTaskComponent  {
  @Input()
  task!: Task;

  @Output()
  onTaskDelete = new EventEmitter<string>();

  public changeToNew = () => {
    this.task.changeStatus(TaskStatus.New);
  }

  public changeToInProgress = () => {
    this.task.changeStatus(TaskStatus.InProgress);
  }

  public changeToDone = () => {
    this.task.changeStatus(TaskStatus.Done);
  }

  public deleteTask = () => {
    this.onTaskDelete.emit(this.task.id);
  }
}
