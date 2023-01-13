import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-summary',
  templateUrl: './tasks-summary.component.html',
  styleUrls: ['./tasks-summary.component.scss']
})
export class TasksSummaryComponent implements OnDestroy {
  tasksCount: number = 0;
  sub: Subscription;

  constructor(private tasksService: TasksService) {
    this.sub = this.tasksService.tasks.subscribe(tasks => {
      this.tasksCount = tasks.length;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
