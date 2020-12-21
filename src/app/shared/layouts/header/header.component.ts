import { Component, EventEmitter, OnInit, Output } from "@angular/core";
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
    public infoMessages: InfoMessagesService
  ) {}

  ngOnInit() {}

  logout(){
    this.auth.logout();
  }
}
