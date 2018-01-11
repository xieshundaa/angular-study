import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guard/auth.service';
import { AuthGuardService } from '../guard/auth.guard';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.scss']
})
export class WorkSpaceComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router ) { }

  ngOnInit() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
