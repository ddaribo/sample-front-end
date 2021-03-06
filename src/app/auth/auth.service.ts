import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";

import { map, tap } from "rxjs/operators";
import * as _ from "lodash";

import { backendURL, camelToSnakeCase, loginURL, registerURL, logoutURL } from "src/utils";

// Local storage key under which the user profile is saved
const AUTH_DATA = "Authorization";
const USER_DATA = "User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public subject = new BehaviorSubject<any>(null);

  user$: Observable<any> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));

    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    const user = localStorage.getItem(USER_DATA); //string

    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  public login(email: string, password: string): Observable<any> {
    return this.http
      .post(backendURL + loginURL, { email, password })
      .pipe(
        tap((user) => {
          this.subject.next(user);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user['token']));
          localStorage.setItem(USER_DATA, JSON.stringify(user));
        })
      );
  }

  public logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('Authorization'))}`,

      })
    }

    this.http.get(backendURL + logoutURL, httpOptions);
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
    localStorage.removeItem(USER_DATA);
  }

  public register(userData: any): Observable<any> {
    let postData = {};
    for (const key in userData) {
      const newKey: string = camelToSnakeCase(key);
      postData[newKey] = userData[key];
    }
    delete postData["confirm_password"];

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };

    return this.http.post(
      backendURL + registerURL,
      JSON.stringify(postData),
      httpOptions
    );
  }
}
