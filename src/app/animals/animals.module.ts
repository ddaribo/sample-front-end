import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalService } from '../animal.service';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AnimalsComponent, AnimalDetailsComponent],
  exports: [AnimalsComponent],
  providers: [AnimalService]
})
export class AnimalsModule { }