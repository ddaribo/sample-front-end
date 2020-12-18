import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {camelToSnakeCase} from 'src/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(userData: any){
    let postData = {};
    for (const key in userData) {
      const newKey: string = camelToSnakeCase(key);
      postData[newKey] = userData[key];
    }
    delete postData['confirm_password'];
    return this.http.post('localhost:8000/auth/register/', postData);
  }
}
