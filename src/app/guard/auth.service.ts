import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor () {}

  login(): boolean {
    if (localStorage.getItem('userId')) {
        this.isLoggedIn = true;
        return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('userId');
    this.isLoggedIn = false;
  }
}
