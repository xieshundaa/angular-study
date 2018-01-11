import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goworkSpace() {
    localStorage.setItem('userId', '123123');
    // this.router.navigateByUrl('/workspace');
    this.router.navigateByUrl('workspace');
  }
}
