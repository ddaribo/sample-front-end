import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";
import { AnimalsComponent } from "../animals/animals/animals.component";
import { AnimalDetailsComponent } from "../animals/animal-details/animal-details.component";

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
    path: "animals/:animalId",
    component: AnimalDetailsComponent
  },
  // {
  //   path: "",
  //   component: AppComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
