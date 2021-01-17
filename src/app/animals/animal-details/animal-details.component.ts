import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { Post } from "src/app/shared/models/post";
import { backendURL, handleError } from "src/utils";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-animal-details",
  templateUrl: "./animal-details.component.html",
  styleUrls: ["./animal-details.component.css"],
})
export class AnimalDetailsComponent implements OnInit {
  animal: any;
  animalArr: any;
  animalId: number;
  isUserLoggedIn: boolean;
  isCurrentUserTheAuthor: boolean;
  BASE_BACKEND_URL: string = backendURL;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private authService: AuthService,
    private infoMessagesService: InfoMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.animalId = +params.get("animalId");
    });

    this.animalService.getAnimalById(this.animalId)
      .subscribe((response: Post) => {
        this.animal = response;
        this.authService.subject.subscribe((user: any) => {
          if (user && user.me.id === this.animal.author.id) {
            this.isCurrentUserTheAuthor = true;
          }
        });
      });
  }

  onDeletePost(postId: number) {
    this.animalService.deletePost(postId).subscribe(
      (response: any) => () => {
        const message = `Successfully deleted post!`;
        this.infoMessagesService.showErrors({
          message: message,
          areErrors: false
        });
      },
      (err) => {
        const message = `Failed deleting post: ${handleError(err)}.`;
        this.infoMessagesService.showErrors({
          message: message,
          areErrors: true
        });
      })
      this.animalService.subject.next(null);
  }

  wantToRescue(post) {
    this.animalService.sendAdoptionRequest(post.id).subscribe(
      (response: any) => () => {
        const message = `Request sent successfully!`;
        this.infoMessagesService.showErrors({
          message: message,
          areErrors: false
        });
      },
      (err) => {
        const message = `Failed sending request: ${handleError(err)}.`;
        this.infoMessagesService.showErrors({
          message: message,
          areErrors: true
        });
      })
  }

}
