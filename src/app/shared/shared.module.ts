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

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatBadgeModule
  ],
  declarations: [HeaderComponent, HomePageComponent, InfoMessagesComponent],
  exports: [MatToolbarModule, HeaderComponent, HomePageComponent]
})
export class SharedModule {}


/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

      // console.log("interceptor: " + req.url);
      req = req.clone({
        withCredentials: true
      });

      return next.handle(req);
  }
}
