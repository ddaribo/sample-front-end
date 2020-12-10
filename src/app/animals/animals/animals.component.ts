import { Component, OnInit } from "@angular/core";
import { AnimalService } from "../../animal.service";

@Component({
  selector: "app-animals",
  templateUrl: "./animals.component.html",
  styleUrls: ["./animals.component.css"]
})
export class AnimalsComponent implements OnInit {
  animals: any;

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.animalService.getData().subscribe((response: any) => {
      this.animals = response.animals;
    });
  }
}
