import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { handleError, camelToSnakeCase } from "src/utils";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { AnimalService } from "../animal.service";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-post-animal",
  templateUrl: "./post-animal.component.html",
  styleUrls: ["./post-animal.component.css"],
})
export class PostAnimalComponent implements OnInit {

  private previewImage: any;
  private uploadedImageFile: File;

  animalForm = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    animal_species: ["", Validators.required],
    due_date: ["", Validators.required],
    city: ["", Validators.required],
    photo: [""],
  });
  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private router: Router,
    public infoMessagesService: InfoMessagesService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  onFileChanged(event: any){
    const files =  event.target.files;
    if (!files || files.length === 0)
      return;

    this.uploadedImageFile = event.target.files[0];
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
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImageFile);
    reader.onload = () => {
      postData['photo'] = reader.result;

      this.animalService.createPost(postData).subscribe(
        () => {
          this.router.navigate([""]);
          const message = `Post creation was successful!`;
          this.infoMessagesService.showErrors( {
            message: message,
            areErrors:false
          });
        },
        (err) => {
          const message = `Post creation failed: ${handleError(err)}`;
          this.infoMessagesService.showErrors( {
            message: message,
            areErrors:true
          });
        }
      );
    };
  }
}
