import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  users: any;
  animals: any;
  sidenav: any;
  myresponse: any;

  constructor() {}

  ngOnInit() {
    
  }
}
