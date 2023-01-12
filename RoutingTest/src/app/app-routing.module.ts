import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthLazyGuard } from './auth-lazy.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: AboutComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'dashboard', canLoad: [AuthLazyGuard], loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  {
    path: '**', redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
