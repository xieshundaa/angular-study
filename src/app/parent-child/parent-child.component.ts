import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {
  public asd: String = '一个新的标题！';
  constructor() { }

  ngOnInit() {
  }
  doSomthing(val) {
    alert(val);
  }
}
