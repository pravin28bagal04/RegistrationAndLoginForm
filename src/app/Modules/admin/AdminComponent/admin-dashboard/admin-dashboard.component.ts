import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  namefromParent: string = "Pravin";
  dataFromChildfname: string = '';
  dataFromChildaddress: string = '';

  ngOnInit(): void {
  }

  formChild(data: any) {
    //console.log(data);
    this.dataFromChildfname = data.fname;
    this.dataFromChildaddress = data.address;
  }
}
