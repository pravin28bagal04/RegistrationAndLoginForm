import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-user-name',
  templateUrl: './forgot-user-name.component.html',
  styleUrls: ['./forgot-user-name.component.css']
})
export class ForgotUserNameComponent implements OnInit {
  myForm = new FormGroup({

    name: new FormControl(''),

    file: new FormControl(''),

    fileSource: new FormControl('')

  });
  
  files: string[] = [];

  constructor(private http: HttpClient) { }
ngOnInit(): void {
  
}
  // get f() {

  //   return this.myForm.controls;

  // }

  onFileChange(event: any) {
// Single file
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }

    // Multiple files
    // for (var i = 0; i < event.target.files.length; i++) {
    //   this.files.push(event.target.files[i]);
    // }

  }

  submit(data: any) {

    const formData = new FormData();
    // Single file
    formData.append('file', this.myForm.get<any>('fileSource')?.value);

    // Multiple files
  //   for  (var i =  0; i <  this.files.length; i++)  {  
  //     formData.append("file[]",  this.files[i]);
  // } 
    this.http.post('http://localhost/upload.php', formData)
      .subscribe(res => {
        alert('Files Uploaded Successfully.');
      })
  }
}
