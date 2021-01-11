import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { delay, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Post } from "../shared/models/post";
import { backendURL, postsURL, postsCreateURL } from "src/utils";

@Injectable()
export class AnimalService {
  private subject = new BehaviorSubject<Post>(null);
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get("/assets/db.json");
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(backendURL + postsURL);
  }

  public createPost(postFormData): Observable<Post> {
    return this.http.post<Post>(backendURL + postsCreateURL, postFormData).pipe(
      tap((post) => {
        this.subject.next(post);
      })
    );
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
