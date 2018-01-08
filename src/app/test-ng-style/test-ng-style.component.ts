import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.scss']
})
export class TestNgStyleComponent implements OnInit {
  public currentStyles = {};
  public canSave: Boolean = false;
  public isUnchanged: Boolean = false;
  public isSpecial: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  setCurrentStyles() {
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
        'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
        'font-size':   this.isSpecial    ? '36px'   : '12px'
    };
  }
}
