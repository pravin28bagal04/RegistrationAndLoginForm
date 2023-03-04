import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { ChangePasswordComponent } from './MainComponent/change-password/change-password.component';
import { ForgotPasswordComponent } from './MainComponent/forgot-password/forgot-password.component';
import { ForgotUserNameComponent } from './MainComponent/forgot-user-name/forgot-user-name.component';
import { LoginComponent } from './MainComponent/login/login.component';
import { MainHomePageComponent } from './MainComponent/main-home-page/main-home-page.component';
import { NotFoundComponent } from './MainComponent/not-found/not-found.component';
import { RegistrationComponent } from './MainComponent/registration/registration.component';
import { ResetPasswordComponent } from './MainComponent/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainhome', pathMatch: 'full' },
  { path: 'mainhome', component: MainHomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'forgotusername', component: ForgotUserNameComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Modules/admin/admin.module')
      .then((m) => m.AdminModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Modules/dashboard/dashboard.module')
      .then((m) => m.DashboardModule),
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
