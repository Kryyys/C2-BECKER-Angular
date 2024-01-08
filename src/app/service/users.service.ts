import { Injectable } from '@angular/core';
import {UserLdap} from "../models/user-ldap";
import {LDAP_USERS} from "../models/ldap-mock-data";
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  private usersUrl = '';

// Liste des utilisateurs
  users: UserLdap[] = LDAP_USERS;

  addUser(user: UserLdap): Observable<UserLdap> {
    this.users.push(user);
    return of(user);
  }

  updateUser (userToUpdate: UserLdap): Observable<UserLdap> {
    const user = this.users.find(u =>
      u.login === userToUpdate.login);
    if (user) {
      user.nom = userToUpdate.nom;
      user.prenom = userToUpdate.prenom;
      user.nomComplet = user.nom + ' ' + user.prenom;
      user.motDePasse = userToUpdate.motDePasse;

      return of(userToUpdate);
    }

    return throwError(() => new Error ('Utilisateur non trouvé'));
  }

  getUsers(): Observable<UserLdap[]> {
    return of(this.users);
  }

  getUser(login: string): Observable<UserLdap> {
    const user = this.users.find(user => user.login === login);
    if (user !== undefined)
      return of(user);

    return throwError(() => new Error ('Utilisateur non trouvé'));
  }

  constructor(private http: HttpClient) {
    this.usersUrl = environment.usersApiUrl;
  }
}

