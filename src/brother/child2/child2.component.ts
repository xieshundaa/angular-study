import { Component, OnInit } from '@angular/core';
import { BtnStatusService } from '../service/btn-status.service';
@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  public events: Array<any> = [];
  constructor(public btnStatusService: BtnStatusService) { }

  ngOnInit() {
    this.btnStatusService.btnStatus.subscribe((val) => {
      this.events.push(val + '-' + new Date());
    });
  }

}
