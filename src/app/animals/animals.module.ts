import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimalsComponent } from "./animals.component";
import { AnimalDetailsComponent } from "./animal-details/animal-details.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AnimalService } from './animal.service';
import { SharedModule } from "../shared/shared.module";
import { PostAnimalComponent } from './post-animal/post-animal.component';

@NgModule({
  declarations: [
    AnimalsComponent, 
    AnimalDetailsComponent, 
    PostAnimalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [AnimalsComponent, AnimalDetailsComponent, PostAnimalComponent],
  providers: [AnimalService]
})
export class AnimalsModule {}
