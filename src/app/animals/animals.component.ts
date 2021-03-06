import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { Post } from "src/app/shared/models/post";
import { AnimalService } from "./animal.service";

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styleUrls: ["./animals.component.css"]
})
export class AnimalsComponent implements OnInit {

  animals: Post[] = [];
  posts$: Observable<Post[]>;
  postsChanged = new BehaviorSubject<Post[]>(null);

  filterInput = '';
  filterCriteria: string;
  constructor(
    private animalService: AnimalService,
    private infoMessagesService: InfoMessagesService) {}

  ngOnInit() {
    this.filterCriteria = 'title';
    /*this.animalService.getPosts().subscribe((response: any) => {
      console.log(response);
      this.animals = response;
    });*/
    // Or use observable?
    this.posts$ = this.animalService.getPosts();
    
    //get some animal type
    /*this.posts$ = this.posts$
    .pipe(
      map(animals => animals.filter(animal => animal.animal_species === "dog"))
      );*/
      
    }

}
