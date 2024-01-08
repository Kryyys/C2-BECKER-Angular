import { Injectable } from '@angular/core';
import {of} from "rxjs";

interface AuthentificationResponse {
  status: boolean;
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  redirectUrl = '/';

  constructor() { }

  static isLoggedIn() {
    const token = AuthentificationService.getToken();
    console.log('token=' + token);
    return !!token && !AuthentificationService.isTokenExpired(token);
  }

  static isTokenExpired(token: string) {
    // try {
    //   const decoded = jwt_decode(token);
    //   return decoded.exp < Date.now() / 1000:
    // } catch (err) {
    //   return false;
    // }

    return false;
  }

  static setToken(idToken: string) {
    sessionStorage.setItem('id_token', idToken)
  }

  static getToken() {
    return sessionStorage.getItem('id_token');
  }

  static logout() {
    sessionStorage.removeItem('id_token');
  }

  loginWithRole(username, password, role) {
    const response: AuthentificationResponse
      = {status: true, message: 'HTTP 200', token: 'atoken'};
    AuthentificationService.setToken('token');
    return of(response);
  }
}
