import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-model',
  templateUrl: './test-ng-model.component.html',
  styleUrls: ['./test-ng-model.component.scss']
})
export class TestNgModelComponent implements OnInit {
  public currentRace: any = { name: '随机种族' };
  constructor() {}

  ngOnInit() {}
}
