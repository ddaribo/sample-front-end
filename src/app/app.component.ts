import { Component, VERSION } from "@angular/core";
import { ReadDataService } from "./read-data.service";

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

  constructor(private data: ReadDataService) {}

  ngOnInit() {
    this.data.getData().subscribe((response: any) => {
      this.myresponse = response;
      this.users = this.myresponse.users;
      this.animals = this.myresponse.animals;
      // console.log(this.myresponse);
      // console.log("First animal name: " + this.myresponse.animals[0].name);
      // console.log("First user name: " + this.myresponse.users[0].user);
    });
  }
}
