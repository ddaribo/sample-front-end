import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
import { MatFormFieldModule } from "@angular/material/form-field";
import { ShortenPipe } from "./shorten-description.pipe";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [HeaderComponent, HomePageComponent, InfoMessagesComponent, ShortenPipe],
  exports: [
    HeaderComponent, 
    HomePageComponent,
    ShortenPipe,
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

