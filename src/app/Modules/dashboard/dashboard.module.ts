import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './DashboardComponent/dashboard/dashboard.component';
import { DashboardHomeComponent } from './DashboardComponent/dashboard-home/dashboard-home.component';
import { DashboardHeaderComponent } from './DashboardComponent/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './DashboardComponent/dashboard-footer/dashboard-footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
