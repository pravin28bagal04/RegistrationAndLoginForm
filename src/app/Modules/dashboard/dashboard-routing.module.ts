import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './DashboardComponent/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './DashboardComponent/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/dashboard-home', pathMatch: 'full' },
      { path: 'dashboard-home', component: DashboardHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
