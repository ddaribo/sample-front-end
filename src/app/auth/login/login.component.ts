import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "../authmodule.css"]
})
export class LoginComponent implements OnInit {
  user = { username: "", password: "" };

  profileForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    this.user.username = this.profileForm.value.username;
    this.user.password = this.profileForm.value.password;
    console.log("User: ", this.user);
  }
}
