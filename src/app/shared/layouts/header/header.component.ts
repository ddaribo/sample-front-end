import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { InfoMessagesService } from "../../info-messages/info-messages.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public infoMessagesService: InfoMessagesService,
    private router: Router
  ) {}

  ngOnInit() {}

  logout(){
    this.auth.logout();
    this.router.navigateByUrl("/");
    this.infoMessagesService.showErrors( {
      message: "Successfully logged out.",
      areErrors: false
    });
  }

}
