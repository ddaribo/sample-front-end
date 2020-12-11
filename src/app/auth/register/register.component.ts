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
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    city: ""
  };

  registerForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    city: ["", Validators.required],
    username: ["", Validators.required],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  });
  constructor(private fb: FormBuilder,
    private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.user.username = this.registerForm.value.username;
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
