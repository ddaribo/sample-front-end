import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPrivateComponent } from './user-private/user-private.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserPrivateComponent, NotificationsComponent]
})
export class UserModule { }