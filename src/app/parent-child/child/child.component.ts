import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  public panelTitle: string;
  @Output()
  public follow = new EventEmitter<string>();
  public paneltitle = '从子组件的传递过来的信息';
  constructor() { }

  ngOnInit() {
  }
  public childFun() {
    console.log(this.panelTitle);
  }
  public emitAnEvent(val) {
    this.follow.emit(val);
  }
}
