import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  imgData:string;
  constructor() { }

  ngOnInit() {
    this.imgData = 'assets/ss.jpg'
  }
}
