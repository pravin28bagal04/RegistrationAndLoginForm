import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public uploadfile(file: File| string) {
    let formParams = new FormData();
    formParams.append('file', file);
    
    return this.httpClient.post('https://localhost/upload.php', formParams)
  }
}
