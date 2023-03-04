import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/ApiServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin !: FormGroup;
  ImagePath: string;
  userData: any;

  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router, private http: HttpClient) {
    this.ImagePath = '/assets/login.png';
  }
  ngOnInit(): void {

    this.formLogin = this.fb.group({
      uname: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });

    if (this.loginService.isLoggedIn()) {
      this.route.navigate(['/admin']);
    }


  }

  login(data: any) {
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
