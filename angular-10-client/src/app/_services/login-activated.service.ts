import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginActivatedService implements CanActivate{

  constructor(private serviceLogin: LoginService,
              private route: Router) { }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serviceLogin.isLogin()){
      this.route.navigateByUrl('/');
      return false;

    }

    return true;
  }
}
