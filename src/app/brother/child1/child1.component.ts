import { Component, OnInit } from '@angular/core';
import { BtnStatusService } from '../service/btn-status.service';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor(public btnStatusService: BtnStatusService) { }

  ngOnInit() {
  }
  public triggerBtnStatus() {
    this.btnStatusService.btnStatus.next('第一个组件事件触发');
  }
}
