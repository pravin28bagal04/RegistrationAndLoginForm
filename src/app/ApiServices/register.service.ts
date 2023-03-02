import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Register } from '../DataModels/register.models';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL: string = "http://localhost:3000/register";
  constructor(private http: HttpClient) { }

  register(data: any): Observable<Register> {
    return this.http.post<any>(this.baseURL, data)
      .pipe(map((res) => {
        return res;
      }))
  }

  getAllRegistration(): Observable<Register[]> {
    return this.http.get<any[]>(this.baseURL)
      .pipe(map((res) => {
        return res;
      }))
  }

  updateRegistration(id: number, data: any): Observable<Register> {
    return this.http.put<any>(this.baseURL + '/' + id, data)
      .pipe(map((res) => {
        return res;
      }))
  }

  deleteRegistration(id: number): Observable<Register> {
    return this.http.delete<any>(this.baseURL + '/' + id)
      .pipe(map((res) => {
        return res;
      }))
  }

}
