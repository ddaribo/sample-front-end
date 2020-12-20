import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "../authmodule.css"]
})
export class LoginComponent implements OnInit {
  //user = { email: "", password: "" };

  profileForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    const formValue = this.profileForm.value; 
    this.auth.login(formValue.email, formValue.password)
      .subscribe(
        () => {
          this.router.navigateByUrl("/")
        },
        err => {
          alert("Login failed!");
        }
      );
  }
}
