import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { AuthService } from "../auth.service";
import { handleError } from "src/utils";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "../authmodule.css"],
})
export class LoginComponent implements OnInit {
  //user = { email: "", password: "" };

  profileForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private infoMessagesService: InfoMessagesService
  ) {}

  ngOnInit() {}

  onSubmit() {
    const formValue = this.profileForm.value;
    this.auth.login(formValue.email, formValue.password).subscribe(
      () => {
        this.router.navigateByUrl("/");
        this.infoMessagesService.showErrors({
          message: "Successfully logged in.",
          areErrors: false
        });
      },
      (err) => {
        const message = `Login failed: ${handleError(err)}`;
        this.infoMessagesService.showErrors({
          message: message,
          areErrors: true
        });
      }
    );
  }
}
