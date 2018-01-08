import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1LocalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public writeData() {
    window.localStorage.setItem('userMessage', JSON.stringify({name: '大疯魔', age: 1}));
  }
}
