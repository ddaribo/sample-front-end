import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css", "../authmodule.css"]
})
export class RegisterComponent implements OnInit {
  user = {
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    city: ""
  };
  // TODO: Add password and confirm password match validator
  registerForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    city: ["", Validators.required],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  });
  constructor(private fb: FormBuilder,
    private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    console.log("User: ", this.user);

    /*this.authService.register(this.registerForm.subscribe(
      () => {
        console.log('success');
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    ))*/
    this.authService.register(this.registerForm.value);

  }
}
