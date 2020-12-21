import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import * as _ from "lodash";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
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
    firstName: ["", [Validators.required, Validators.minLength(2)] ],
    lastName: ["", [Validators.required, Validators.minLength(2)] ],
    email: ["", [Validators.required, Validators.email] ],
    city: ["", [Validators.required, Validators.minLength(2)] ],
    password: ["", [Validators.required, Validators.minLength(8)] ],
    confirmPassword: ["", [Validators.required, Validators.minLength(8) ] ]
  });
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public infoMessagesService: InfoMessagesService) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      () => {
        console.log('success');
        this.router.navigate([''])
      },
      (err) => {
        const message = "Sign up failed!";
        this.infoMessagesService.showErrors(message);
        console.log(message, err);
      }
    );

    /*const result = this.authService.register(this.registerForm.value);
    if (_.get(result, 'error')) {
      console.log("Something went wrong", result['error']);
    } else {
      // Go to home page
      this.router.navigate([''])
    }*/
  }
}
