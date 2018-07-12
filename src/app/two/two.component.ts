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
    this.imgData ='http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&hs=2&pn=2&spn=0&di=122917821400&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3729188735%2C351366433&os=3769120169%2C3801645759&simid=3510680931%2C404655110&adpicid=0&lpn=0&ln=1976&fr=&fmq=1531385678601_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0825%2F5203cb96ceadafa0f2f26d11c572d727.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B8mf7vwt_z%26e3Bv54AzdH3Fda8mAzdH3FabAzdH3Flaalm_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist='
  }

}
