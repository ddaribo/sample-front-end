import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";
import { AnimalsComponent } from "../animals/animals/animals.component";
import { AnimalDetailsComponent } from "../animals/animal-details/animal-details.component";
import { AddAnimalComponent } from "../animals/add-animal/add-animal.component";
import { HomePageComponent } from "../shared/layouts/home-page/home-page.component";
import { UserPrivateComponent } from "../user/user-private/user-private.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "animals",
    component: AnimalsComponent
  },
  {
    path: "animals/add",
    component: AddAnimalComponent
  },
  {
    path: "animals/:animalId",
    component: AnimalDetailsComponent
  },
  {
    path: "user",
    component: UserPrivateComponent
  },
  {
    path: "",
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
