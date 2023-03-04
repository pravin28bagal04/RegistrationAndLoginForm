import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {

  constructor(private http: HttpClient, private route: Router) { }
  logout() {
    sessionStorage.clear();
    this.route.navigate(['']);
  }
}
