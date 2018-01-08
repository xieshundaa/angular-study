import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-mustache',
  templateUrl: './test-mustache.component.html',
  styleUrls: ['./test-mustache.component.scss']
})
export class TestMustacheComponent implements OnInit {
  public title = 'Angular世界';
  public imgSrc = 'http://images.gitbook.cn/355497c0-ae81-11e7-8998-dde22b48a6a0';
  constructor() { }

  ngOnInit() {
  }
  getVal() {
    return 'getVal（）方法！';
  }
 sayHello(val: any) {
    alert(val);
  }
}
