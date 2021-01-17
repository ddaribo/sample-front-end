import { Component, OnInit, Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from "@angular/forms";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-private',
  templateUrl: './user-private.component.html',
  styleUrls: ['./user-private.component.css']
})
export class UserPrivateComponent implements OnInit {
  user: any;
  isEditing: boolean;
  editUserForm = this.fb.group({
    email: [this.userService.getCurrentUser().email, [Validators.required, Validators.email]],
    city: [this.userService.getCurrentUser().city, [Validators.required, Validators.minLength(2)]],
    receiveNotifications: [this.userService.getCurrentUser().receive_notifications]
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.isEditing = false;
    this.editUserForm.patchValue({
      email: this.user.me.email,
      city: this.user.me.city,
      receiveNotifications: this.user.me.receive_notifications
    })
  }

  onUserSubmit() {}

}
