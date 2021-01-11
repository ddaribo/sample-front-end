import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";

import { map, shareReplay, tap } from "rxjs/operators";
import * as _ from "lodash";

import { backendURL, camelToSnakeCase, loginURL, registerURL } from "src/utils";
import { User } from "../shared/models/user";

// Local storage key under which the user profile is saved
const AUTH_DATA = "Authorization";
const USER_DATA = "User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private subject = new BehaviorSubject<User>(null);

  user$: Observable<User> = this.subject.asObservable();
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

  public login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(backendURL + loginURL, { email, password })
      .pipe(
        tap((user) => {
          this.subject.next(user);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user['token']));
          localStorage.setItem(USER_DATA, JSON.stringify(user));
        }),
        // Avoid multiple calls to this api endpoint
        shareReplay()
      );
  }

  public logout() {
    this.subject.next(null);
    // TODO: Should call the logout API
    localStorage.removeItem(AUTH_DATA);
    localStorage.removeItem(USER_DATA);
  }

  public register(userData: any): Observable<User> {
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

    return this.http.post<User>(
      backendURL + registerURL,
      JSON.stringify(postData),
      httpOptions
    );
  }
}
