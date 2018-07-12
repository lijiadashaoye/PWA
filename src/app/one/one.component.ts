import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  imgData;
  constructor() { }

  ngOnInit() {
    this.imgData = '../../assets/1.jpg'
  }
}
