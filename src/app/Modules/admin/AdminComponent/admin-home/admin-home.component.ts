import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() fromParent: string = '';
  @Output() eventData = new EventEmitter<any>();
  myForm!: FormGroup;
  // homeData: any = [];

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname: [null],
      address: [null]
    });

    // this.homeData = [
    //   { id: 1, name: 'Test1', address: 'Manjari', mo_no: '9999999901' },
    //   { id: 2, name: 'Test2', address: 'Manjari, Pune', mo_no: '9999999902' },
    //   { id: 3, name: 'Test3', address: 'Manjari Bk', mo_no: '9999999903' }
    // ]
  }

  onSubmit(data: any) {
    //console.log(data);
    this.eventData.emit(data);
  }  

}
