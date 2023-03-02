import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './MainComponent/login/login.component';
import { RegistrationComponent } from './MainComponent/registration/registration.component';
import { NotFoundComponent } from './MainComponent/not-found/not-found.component';
import { ForgotUserNameComponent } from './MainComponent/forgot-user-name/forgot-user-name.component';
import { ForgotPasswordComponent } from './MainComponent/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './MainComponent/reset-password/reset-password.component';
import { ChangePasswordComponent } from './MainComponent/change-password/change-password.component';
import { MainHomePageComponent } from './MainComponent/main-home-page/main-home-page.component';
import { MainHeaderComponent } from './MainComponent/main-header/main-header.component';
import { MainFooterComponent } from './MainComponent/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    ForgotUserNameComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    MainHomePageComponent,
    MainHeaderComponent,
    MainFooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
