import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-private',
  templateUrl: './user-private.component.html',
  styleUrls: ['./user-private.component.css']
})
export class UserPrivateComponent implements OnInit {

  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

}