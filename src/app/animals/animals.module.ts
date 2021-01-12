import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalsComponent } from "./animals.component";
import { AnimalDetailsComponent } from "./animal-details/animal-details.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AnimalService } from './animal.service';
import { SharedModule } from "../shared/shared.module";
import { PostAnimalComponent } from './post-animal/post-animal.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';

const animalRoutes: Routes = [
  {
    path: "animals",
    component: AnimalsComponent
  },
  {
    path: "animals/post",
    component: PostAnimalComponent
  },
  {
    path: "animals/:animalId",
    component: AnimalDetailsComponent
  },
]

@NgModule({
  declarations: [
    AnimalsComponent, 
    AnimalDetailsComponent, 
    PostAnimalComponent, 
    AnimalListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(animalRoutes)
  ],
  // exports: [AnimalsComponent, AnimalDetailsComponent, PostAnimalComponent, AnimalListItemComponent],
  exports: [RouterModule],
  providers: [AnimalService]
})
export class AnimalsModule {}
