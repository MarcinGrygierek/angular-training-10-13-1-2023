import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'summary', component: TasksSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
