import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ReadDataService } from "./read-data.service";
import { SharedModule } from "./shared/shared.module";
import { AnimalsModule } from "./animals/animals.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AuthModule } from "./auth/auth.module";

import "hammerjs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnimalsModule,
    SharedModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    AuthModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ReadDataService]
})
export class AppModule {}
