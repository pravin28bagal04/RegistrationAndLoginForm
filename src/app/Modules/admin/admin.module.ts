import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './AdminComponent/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './AdminComponent/about/about.component';
import { ContactUsComponent } from './AdminComponent/contact-us/contact-us.component';
import { FooterComponent } from './AdminComponent/footer/footer.component';
import { HeaderComponent } from './AdminComponent/header/header.component';
import { AdminHomeComponent } from './AdminComponent/admin-home/admin-home.component';
import { ServicesComponent } from './AdminComponent/services/services.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AboutComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    AdminHomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
