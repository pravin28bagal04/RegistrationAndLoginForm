import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home-page',
  templateUrl: './main-home-page.component.html',
  styleUrls: ['./main-home-page.component.css']
})
export class MainHomePageComponent implements OnInit {
  ImagePath1: string; ImagePath2: string; ImagePath3: string;

  constructor() {
    this.ImagePath1 = '/assets/img1.jpg';
    this.ImagePath2 = '/assets/img2.jpg';
    this.ImagePath3 = '/assets/img3.jpg';
  }

  ngOnInit(): void {

  }
}
