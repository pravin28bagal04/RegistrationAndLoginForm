import { HttpClient } from '@angular/common/http';
import { ExpressionType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  baseURL: string = 'http://localhost:3000/district';
  constructor(private http: HttpClient) { }

  getAllDistricts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL)
      .pipe(map((res) => {
        return res;
      }))
  }

  getDistrictByStateID(id: any) {
    return this.http.get<any>(this.baseURL + '?state_id=' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
