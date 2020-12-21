import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, shareReplay } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Post } from "../shared/models/post";
import { backendURL, postsURL } from "src/utils";

@Injectable()
export class AnimalService {
  constructor(private http: HttpClient) {}
   getData() {
     return this.http.get("/assets/db.json");
   }

  public getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(backendURL + postsURL);
  }
  /*
  loadAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>("/api/animals")
      .pipe(
          map(res => res["animals"]), // or sth else
          // only trigger one http request for this observable; otherwise every subscription issues a separate http request
          shareReplay()
      );
  }

  saveAnimal(animal: Animal):Observable<any>{
    return this.http.post('api/animals/${animal.animalId}')
    .pipe(
      shareReplay()
    )
  }
  */
}
