import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {
  tasks = this.tasksService.tasks;

  constructor(private tasksService: TasksService) { }
}
