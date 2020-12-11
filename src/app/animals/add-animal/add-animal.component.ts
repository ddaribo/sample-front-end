import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-add-animal",
  templateUrl: "./add-animal.component.html",
  styleUrls: ["./add-animal.component.css"]
})
export class AddAnimalComponent implements OnInit {
  animalForm = this.fb.group({
    name: ["", Validators.required],
    animalType: ["", Validators.required],
    city: ["", Validators.required],
    image: [""],
    dueDate: [""]
  });
  constructor(private fb: FormBuilder, private animalService: AnimalService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.animalForm.value);
  }
}
