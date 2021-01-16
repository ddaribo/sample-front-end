import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../user.service';

// @Injectable({providedIn: 'root'})
// export class EditingService {
//   isEditing: boolean = false;
// }

@Component({
  selector: 'app-user-private',
  templateUrl: './user-private.component.html',
  styleUrls: ['./user-private.component.css']
})
export class UserPrivateComponent implements OnInit {

  user: any;
  constructor(
    private userService: UserService,
    // private isEditingService: EditingService
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  // get isEditing(): boolean {
  //   return this.isEditingService.isEditing;
  // }

  toggleEditMode() {
    // this.isEditingService.isEditing = !this.isEditing;
  }

}
