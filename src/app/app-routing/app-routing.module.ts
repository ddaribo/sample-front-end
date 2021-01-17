import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";
import { AnimalsComponent } from "../animals/animals.component";
import { AnimalDetailsComponent } from "../animals/animal-details/animal-details.component";
import { HomePageComponent } from "../shared/layouts/home-page/home-page.component";
import { UserPrivateComponent } from "../user/user-private/user-private.component";
import { PostAnimalComponent } from "../animals/post-animal/post-animal.component";
import { APP_BASE_HREF } from "@angular/common";
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component";
import { AuthGuard } from "../auth/auth.guard";

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
    component: AnimalsComponent,
    pathMatch: 'full'
  },
  {
    path: "animals/post",
    canActivate: [AuthGuard],
    component: PostAnimalComponent
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
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
