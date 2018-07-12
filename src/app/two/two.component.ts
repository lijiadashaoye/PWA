import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  imgData;
  constructor() { }

  ngOnInit() {
    this.imgData = 'assets/2.jpg'
  }

}
