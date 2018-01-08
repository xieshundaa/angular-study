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
  public paneltitle = '子组件的名字';
  constructor() { }

  ngOnInit() {
  }
  public childFun() {
    console.log(this.paneltitle);
  }
  public emitAnEvent(val) {
    this.follow.emit(val);
  }
}
