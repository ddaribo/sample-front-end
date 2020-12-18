import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {camelToSnakeCase} from 'src/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl: string = 'http://127.0.0.1:8000/auth/register/';

  constructor(private http: HttpClient) { }

  public register(userData: any){
    let postData = {};
    for (const key in userData) {
      const newKey: string = camelToSnakeCase(key);
      postData[newKey] = userData[key];
    }
    delete postData['confirm_password'];

    this.http.post(this.registerUrl, JSON.stringify(postData), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).toPromise().then((result) => {console.log(result); return result;});
  }
}
