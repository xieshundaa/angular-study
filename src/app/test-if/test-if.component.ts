import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-if',
  templateUrl: './test-if.component.html',
  styleUrls: ['./test-if.component.scss']
})
export class TestIfComponent implements OnInit {
  public isShow: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleShow(): void {
    this.isShow = !this.isShow;
  }
}
