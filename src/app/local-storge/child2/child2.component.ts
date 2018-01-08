import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2LocalComponent implements OnInit {
  public obj = {
    name: '默认值',
    age: 0
  };

  constructor() { }

  ngOnInit() {
  }
  public readData() {
    const userMessage = window.localStorage.getItem('userMessage');
    this.obj = JSON.parse(userMessage);
    // console.log(obj.name);
    // console.log(obj.age);
  }

}
