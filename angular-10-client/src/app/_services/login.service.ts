import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {


  }

  // tslint:disable-next-line:typedef
  isLogin(){
    return !(sessionStorage.getItem('auth-token') == null);
  }
}
