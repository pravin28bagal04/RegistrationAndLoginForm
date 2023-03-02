import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TehsilService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'http://localhost:3000/tehsil';

  getAllTehsils(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL)
      .pipe(map((res) => {
        return res;
      }))
  }
  getTehsilByStateID(id: any) {
    return this.http.get<any>(this.baseURL + '?district_id=' + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
