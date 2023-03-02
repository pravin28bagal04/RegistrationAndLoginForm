import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegTypeService {

  baseURL: string = 'http://localhost:3000/reg_type';
  constructor(private http: HttpClient) { }


  getAllRegType(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL).
      pipe(map((res: any) => {
        return res;
      }))

  }
}
