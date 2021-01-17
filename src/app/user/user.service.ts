import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { backendURL, camelToSnakeCase, userUpdateURL } from "src/utils";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getCurrentUser() {
    return JSON.parse(localStorage.getItem('User'));
  }

  public update(userData: any) {
    console.log(userData);
    let postData = {};
    for (const key in userData) {
      const newKey: string = camelToSnakeCase(key);
      postData[newKey] = userData[key];
    }

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('Authorization'))}`,
      }),
    };

    return this.http.post(
      backendURL + userUpdateURL,
      JSON.stringify(postData),
      httpOptions
    );
  }
}
