import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalsComponent } from "./animals/animals.component";
import { AnimalDetailsComponent } from "./animal-details/animal-details.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { AnimalService } from './animal.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [AnimalsComponent, AnimalDetailsComponent],
  exports: [AnimalsComponent],
  providers: [AnimalService]
})
export class AnimalsModule {}
