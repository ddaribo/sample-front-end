import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { AuthService } from "../auth.service";
import { handleError } from "src/utils";
import { ErrorStateMatcher } from "@angular/material/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css", "../authmodule.css"],
})
export class RegisterComponent implements OnInit {
  user = {
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    city: "",
  };
  // TODO: Add password and confirm password match validator
  registerForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(2)]],
    lastName: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    city: ["", [Validators.required, Validators.minLength(2)]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: ["", [Validators.required, Validators.minLength(8), RegisterComponent.matchValues('password')]],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public infoMessagesService: InfoMessagesService
  ) {}

  public static matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  ngOnInit() {
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      () => {
        const message = `Successfully signed up!`;
        this.router.navigate(["login"]);
        this.infoMessagesService.showErrors( {
          message: message,
          areErrors: false
        });
      },
      (err) => {
        const message = `Signing up failed: ${handleError(err)}.`;
        //this.infoMessagesService.showErrors(message);
        this.infoMessagesService.showErrors( {
          message: message,
          areErrors: true
        });
      }
    );

  }
}
