import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TasksComponent,
    TaskManagerComponent,
    TasksListComponent,
    SingleTaskComponent,
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
