import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

import { catchError, map, shareReplay, tap } from "rxjs/operators";
import * as _ from 'lodash';

import { backendURL, camelToSnakeCase, loginURL, registerURL } from "src/utils";
import { User } from "../shared/models/user";

// Local storage key under which the user profile is saved
const AUTH_DATA = "auth_data";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private subject = new BehaviorSubject<User>(null);

  user$ : Observable<User> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(
    private http: HttpClient) {

    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));

    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA); //string

    if (user){
      this.subject.next(JSON.parse(user));
    }
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      // TODO: Should show this error in the message box
      const errorText = _.get(error.error.errors[0].message, '');
      console.error(
        `Backend returned status code of ${error.status}, ` +
        `Error: ${errorText}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something wrong happened. Please try again later.');
  }

  public login(email: string, password: string): Observable<User>{

    return this.http.post<User>(backendURL + loginURL, {email, password})
      .pipe(
        tap(user => {
          this.subject.next(user);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }),
        catchError(this.handleError),
        // Avoid multiple calls to this api endpoint
        shareReplay()
      );
    }

  public logout(){
    this.subject.next(null);
    // Should call the logout API
    localStorage.removeItem(AUTH_DATA);
  }

  public register(userData: any) : Observable<User> {
    let postData = {};
    for (const key in userData) {
      const newKey: string = camelToSnakeCase(key);
      postData[newKey] = userData[key];
    }
    delete postData["confirm_password"];

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<User>(backendURL + registerURL, JSON.stringify(postData), httpOptions).pipe(
      catchError(this.handleError)
    )
  }
}
