import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.scss']
})
export class TestNgClassComponent implements OnInit {
  public currentClasses = {};
  public canSave: Boolean = true;
  public isUnchanged: Boolean = true;
  public isSpecial: Boolean = true;
  constructor() {}

  ngOnInit() {}
  setCurrentClasses() {
    this.currentClasses = {
        'saveable': this.canSave,
        'modified': this.isUnchanged,
        'special': this.isSpecial
    };
  }
}
