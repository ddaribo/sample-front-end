import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(userData: any){
    //return this.http.post('api/v1/users/register', userData);  }
    console.log(userData);
  }
}
