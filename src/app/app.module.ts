import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import "hammerjs";

import { AppComponent } from "./app.component";
import { SharedModule, HttpRequestInterceptor } from "./shared/shared.module";
import { AnimalsModule } from "./animals/animals.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AuthModule } from "./auth/auth.module";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { UserModule } from "./user/user.module";
import { ReadDataService } from "./read-data.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    /*App modules */
    AppRoutingModule,
    SharedModule,
    AuthModule,
    AnimalsModule,
    UserModule,

    /*Material design modules */
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    ReadDataService,
    { provide: APP_BASE_HREF, useValue: "/" },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
