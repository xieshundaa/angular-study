import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-for',
  templateUrl: './test-ng-for.component.html',
  styleUrls: ['./test-ng-for.component.scss']
})
export class TestNgForComponent implements OnInit {
  public races: Array<any>= [
    { name: '人族'},
    {name: '虫族'},
    {name: '神族'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
