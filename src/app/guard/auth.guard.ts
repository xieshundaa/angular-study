import { Injectable } from '@angular/core';
import {
  Router,
  Route,
  CanLoad,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean  {
    // const url = `/${route.path}`;
    // return this.checkLogin(url);
    return false;
  }
  checkLogin(url: string) {
    if (this.authService.login()) {
      // alert(this.authService.isLoggedIn);
      return true;
    } else {
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
    }
    return false;
  }
}
