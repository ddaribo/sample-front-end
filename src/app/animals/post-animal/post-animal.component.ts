import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { handleError, camelToSnakeCase, backendURL, postsURL } from "src/utils";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { AnimalService } from "../animal.service";
import { UserService } from "src/app/user/user.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-post-animal",
  templateUrl: "./post-animal.component.html",
  styleUrls: ["./post-animal.component.css"],
})
export class PostAnimalComponent implements OnInit {

  private previewImage: any;
  private uploadedImageFile: File;
  isEditing: boolean = false;
  animal: any;
  BASE_BACKEND_URL: string = backendURL;

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
    private route: ActivatedRoute,
    public infoMessagesService: InfoMessagesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.queryParams.
      subscribe((params: Params) => {
        if (params['editing']) {
          this.isEditing = true;

          this.route.paramMap.subscribe(params => {
            const animalId: number = +params.get('animalId');
            console.log(animalId);
            this.animalService.getAnimalById(animalId).subscribe(animal => {

              this.animal = animal;
              console.log(this.animal);

              this.animalForm.patchValue({
                title: this.animal.title,
                description: this.animal.description,
                city: this.animal.city,
                due_date: this.animal.due_date,
                animal_species: this.animal.animal_species.toLowerCase()

              });
            });

          });

        }

      });
  }

  onFileChanged(event: any) {
    const files = event.target.files;
    if (!files || files.length === 0)
      return;

    this.uploadedImageFile = event.target.files[0];
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.previewImage = files;
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

    if (!this.isEditing) {
      reader.readAsDataURL(this.uploadedImageFile);
      reader.onload = () => {

        postData['photo'] = reader.result;
        this.animalService.createPost(postData).subscribe(
          () => {
            this.router.navigate([""]);
            const message = `Post creation was successful!`;
            this.infoMessagesService.showErrors({
              message: message,
              areErrors: false
            });
          },
          (err) => {
            const message = `Post creation failed: ${handleError(err)}`;
            this.infoMessagesService.showErrors({
              message: message,
              areErrors: true
            });
          }
        );
      }
    } else {
      if(this.uploadedImageFile){
        reader.readAsDataURL(this.uploadedImageFile);
        reader.onload = () => {
          postData['photo'] = reader.result;
          this.sendUpdateRequest(postData);
          //this.router.navigateByUrl(backendURL + postsURL + this.animal.id);
        }
      }else{
        // If not uploading new image?

        //reader.readAsDataURL(this.BASE_BACKEND_URL + this.animal.photo);
        //reader.onload = () => {
          //postData['photo'] = reader.result;
          this.sendUpdateRequest(postData);
          //this.router.navigateByUrl(backendURL + postsURL + this.animal.id);
        //}
      }
    }
  };

  sendUpdateRequest(postData){
    this.animalService.updatePost(this.animal.id, postData).subscribe(
      () => {
        this.router.navigate([""]);
        const message = `Post edit was successful!`;
        this.infoMessagesService.showErrors({
          message: message,
          areErrors: false
        });
      },
      (err) => {
        const message = `Post edit failed: ${handleError(err)}`;
        this.infoMessagesService.showErrors({
          message: message,
          areErrors: true
        });
      }
    );
  }
}

