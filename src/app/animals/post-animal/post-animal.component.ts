import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { handleError, camelToSnakeCase } from "src/utils";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-post-animal",
  templateUrl: "./post-animal.component.html",
  styleUrls: ["./post-animal.component.css"],
})
export class PostAnimalComponent implements OnInit {

  private previewImage: any;

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

  onFileChanged(event: any){
    const files =  event.target.files;
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();
    this.previewImage= files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.previewImage = reader.result; 
    }
  }

  onSubmit() {
    let postData = {};
    for (const key in this.animalForm.value) {
      const newKey: string = camelToSnakeCase(key);
      postData[newKey] = this.animalForm.value[key];
    }

    this.animalService.createPost(postData).subscribe(
      //TODO: Modify post data according to expected backend model
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
