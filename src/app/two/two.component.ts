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
    this.imgData = 'https://upload-images.jianshu.io/upload_images/311249-f67fda8e02d91fd6?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
  }

}
