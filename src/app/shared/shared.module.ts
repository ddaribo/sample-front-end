import { NgModule, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { HeaderComponent } from "./layouts/header/header.component";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { InfoMessagesComponent } from './info-messages/info-messages.component';
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatError, MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [HeaderComponent, HomePageComponent, InfoMessagesComponent],
  exports: [
    HeaderComponent, 
    HomePageComponent,
      /*Material design modules */
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatBadgeModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule {}

