import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styleUrls: ["./animals.component.css"]
})
export class AnimalsComponent implements OnInit {
  animals: any;
  
  //declare observable
  //animals$: Observable<Animal[]>;

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.animalService.getData().subscribe((response: any) => {
      this.animals = response.animals;
    });

    // For when connected to api
    //this.animals$ = this.animalService.loadAllAnimals();
  
    //get some animal type
    /*const animalsDogs$ = this.animals$
     .pipe(
       map(animals => animals.filter(animal => animal.type == "dog"))
     );*/
  }

}
