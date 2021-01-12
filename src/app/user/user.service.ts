import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser(): void {
    console.log(JSON.parse(localStorage.getItem('User')));
    return JSON.parse(localStorage.getItem('User'));
  }
}
