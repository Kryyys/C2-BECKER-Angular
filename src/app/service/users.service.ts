import { Injectable } from '@angular/core';
import {UserLdap} from "../models/user-ldap";
import {LDAP_USERS} from "../models/ldap-mock-data";
import {Observable, of, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  private usersUrl = '';
  private httpOptions = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    this.usersUrl = environment.usersApiUrl;
  }

  getUsers() {
    return this.http.get<UserLdap[]>(this.usersUrl);
  }

  getUser(id: number) {
    return this.http.get<UserLdap>(this.usersUrl + '/' + id);
  }

  addUser(user: UserLdap) {
    return this.http.post<UserLdap>(this.usersUrl, user, {
      headers: this.httpOptions
    });
  }

  updateUser(user: UserLdap) {
    return this.http.put<UserLdap>(this.usersUrl + '/' + user.id, user, {
      headers: this.httpOptions
    });
  }

  deleteUser(id: number) {
    return this.http.delete<UserLdap>(this.usersUrl + '/' + id, {
      headers: this.httpOptions
    });
  }


}

