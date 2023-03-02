import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'http://localhost:3000/states';

  getAllStates(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL)
      .pipe(map((res) => {
        return res;
      }))
  }
}
