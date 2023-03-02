import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdproofService {

  baseURL: string = 'http://localhost:3000/idProof';
  constructor(private http: HttpClient) { }

  getAllIDProof(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL)
      .pipe(map((res) => {
        return res;
      }))
  }
}
