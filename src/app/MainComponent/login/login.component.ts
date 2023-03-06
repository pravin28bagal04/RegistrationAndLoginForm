import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/ApiServices/login.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin !: FormGroup;
  ImagePath: string;
  userData: any;
  submitted = false;
  encryptedString: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router, private http: HttpClient) {
    this.ImagePath = '/assets/login.png';
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      uname: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.{8,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,15}$/)])],
    });

    if (this.loginService.isLoggedIn()) {
      this.route.navigate(['/admin']);
    }

  }

  get loginFormControl() {
    return this.formLogin.controls;
  }
  login(data: any) {

    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
    data.password = CryptoJS.SHA512(data.password).toString(CryptoJS.enc.Hex);
    this.http.get<any>("http://localhost:3000/register")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.username === data.uname && a.userpassword === data.password
        });
        if (user) {
          //console.log(user);
          alert('You are successfully login...');
          sessionStorage.setItem('uname', this.formLogin.value.uname);
          this.formLogin.reset();
          this.submitted = false;
          if (user.role_id == 999901) {
            this.route.navigate(['/admin']);
          } else if (user.role_id == 999902) {
            this.route.navigate(['/dashboard']);
          }

        } else {
          alert('User Not Found...');
          this.route.navigate(['/login']);
          this.formLogin.reset();
        }

      })
  }

}
