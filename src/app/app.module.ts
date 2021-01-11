import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import "hammerjs";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { AnimalsModule } from "./animals/animals.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AuthModule } from "./auth/auth.module";

import { UserModule } from "./user/user.module";
import { ReadDataService } from "./read-data.service";
import { HttpRequestInterceptor } from "./auth/auth-interceptor.service";

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
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    ReadDataService,
    { provide: APP_BASE_HREF, useValue: "/" },
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },*/
  ],
})
export class AppModule {}
