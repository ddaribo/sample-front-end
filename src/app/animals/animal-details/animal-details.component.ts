import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AnimalService } from '../animal.service';

@Component({
  selector: "app-animal-details",
  templateUrl: "./animal-details.component.html",
  styleUrls: ["./animal-details.component.css"]
})
export class AnimalDetailsComponent implements OnInit {
  animal: any;

  //utility variable used to store all animals (not needed really in a real scenario), but due to the simulated fake backend
  animalArr: any;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {}

  ngOnInit() {
    this.animalService.getData().subscribe((response: any) => {
      this.animalArr = response.animals;
      console.log(this.animalArr[0]);

      this.route.paramMap.subscribe(params => {
        this.animal = this.animalArr[params.get("animalId")];
      });
    });
  }

  wantToRescue(animal) {}
}
