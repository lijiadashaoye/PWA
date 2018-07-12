import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  imgData;
  constructor() { }

  ngOnInit() {
    this.imgData = '/assets/image/2.jpg'
  }
}
