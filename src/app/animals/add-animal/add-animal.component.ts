import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { handleError, camelToSnakeCase } from "src/utils";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-add-animal",
  templateUrl: "./add-animal.component.html",
  styleUrls: ["./add-animal.component.css"],
})
export class AddAnimalComponent implements OnInit {
  animalForm = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    animalType: ["", Validators.required],
    city: ["", Validators.required],
    image: [""],
    dueDate: [""],
  });
  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private router: Router,
    public infoMessagesService: InfoMessagesService
  ) {}

  ngOnInit() {}

  onSubmit() {
    let postData = {};
    for (const key in this.animalForm.value) {
      const newKey: string = camelToSnakeCase(key);
      postData[newKey] = this.animalForm.value[key];
    }

    this.animalService.createPost(postData).subscribe(
      () => {
        this.router.navigate([""]);
        console.log("Post was published successfully");
        // TODO: Show notification for successfully created post
      },
      (err) => {
        const message = `Post creation failed: ${handleError(err)}`;
        this.infoMessagesService.showErrors(message);
      }
    );
  }
}
