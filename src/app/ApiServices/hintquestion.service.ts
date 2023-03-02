import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HintquestionService {

  baseURL: string = 'http://localhost:3000/hintQuestion';
  constructor(private http: HttpClient) { }

  getAllHintQuestion(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL)
      .pipe(map((res) => {
        return res;
      }))
  }
}
