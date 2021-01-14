import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser(): User {
    console.log(JSON.parse(localStorage.getItem('User')));
    return JSON.parse(localStorage.getItem('User'));
  }
}
