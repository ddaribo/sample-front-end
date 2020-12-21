import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InfoMessagesService } from "src/app/shared/info-messages/info-messages.service";
import { Post } from "src/app/shared/models/post";
import { AnimalService } from '../animal.service';

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styleUrls: ["./animals.component.css"]
})
export class AnimalsComponent implements OnInit {
  animals: any;
  
  animals$: Observable<Post[]>;

  constructor(
    private animalService: AnimalService,
    private infoMessagesService: InfoMessagesService) {}

  ngOnInit() {
    //or sth like this
    this.animalService.getData().subscribe((response: any) => {
      this.animals = response.animals;
    });

    // For when connected to api
    //this.animals$ = this.animalService.getPosts();
  
    //get some animal type
    /*const animalsDogs$ = this.animals$
     .pipe(
       map(animals => animals.filter(animal => animal.type == "dog"))
     );*/
  }

}
