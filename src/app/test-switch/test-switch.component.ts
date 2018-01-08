import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-switch',
  templateUrl: './test-switch.component.html',
  styleUrls: ['./test-switch.component.scss']
})
export class TestSwitchComponent implements OnInit {
  public mapStatus: Number = 1;
  constructor() { }

  ngOnInit() {
  }

}
