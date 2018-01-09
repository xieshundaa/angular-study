import { Component, OnInit } from '@angular/core';
import { fadeIn } from './anmate';
@Component({
  selector: 'app-test-animate',
  templateUrl: './test-animate.component.html',
  styleUrls: ['./test-animate.component.scss'],
  animations: [fadeIn]
})
export class TestAnimateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
