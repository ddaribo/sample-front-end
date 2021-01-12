import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { AnimalService } from "../animal.service";

@Component({
  selector: "app-animal-details",
  templateUrl: "./animal-details.component.html",
  styleUrls: ["./animal-details.component.css"],
})
export class AnimalDetailsComponent implements OnInit {
  animal: any;
  animalArr: any;
  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {}

  ngOnInit() {
    this.animalService.getPosts().subscribe((response: any) => {
      this.animalArr = response;

      this.route.paramMap.subscribe((params) => {
        this.animal = this.animalArr[params.get("animalId")];
        console.log(this.animal);
      });
    });
  }

  wantToRescue(animal) {}
}
