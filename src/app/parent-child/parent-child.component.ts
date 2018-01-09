import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {
  public asd: String = '从父组件传过来一个新的标题！';
  constructor() { }

  ngOnInit() {
  }
  doSomthing(val) {
    console.log(val + '1233123');
  }
}
