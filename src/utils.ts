import { throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import * as _ from "lodash";

export const camelToSnakeCase = (key: string) =>
  key.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`);

export const backendURL = "http://127.0.0.1:8000";
export const registerURL = "/auth/register/";
export const loginURL = "/auth/login/";
export const logoutURL = '/auth/logout/';
export const postsURL = "/posts/";
export const postsCreateURL = "/posts/create/";
export const userUpdateURL = '/users/update/'

export const handleError = (error: HttpErrorResponse) => {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    return `An error occurred: ${error.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong
    const errorText = _.get(error, 'error.errors[0].message', "");
    return errorText;

  }
  // return an observable with a user-facing error message
  return throwError("Something wrong happened. Please try again later.");
};
