import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = 'http://localhost:3000/register';
  constructor(private http: HttpClient, private route: Router) { }

  // getByUsername(uname: any) {
  //   return this.http.get<any>('http://localhost:3000/register' + '?username=' + uname);
  // }


  isLoggedIn() {
    return sessionStorage.getItem('uname') != null;
  }
  

}
