import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPrivateComponent } from './user-private/user-private.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserPrivateComponent, NotificationsComponent]
})
export class UserModule { }