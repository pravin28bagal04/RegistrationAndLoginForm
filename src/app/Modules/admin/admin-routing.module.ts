import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './AdminComponent/about/about.component';
import { AdminDashboardComponent } from './AdminComponent/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './AdminComponent/admin-home/admin-home.component';
import { ContactUsComponent } from './AdminComponent/contact-us/contact-us.component';
import { ServicesComponent } from './AdminComponent/services/services.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'services', component: ServicesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
