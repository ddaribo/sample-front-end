import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Post } from "../shared/models/post";
import { backendURL, postsCreateURL, fakeAnimalsApiUrl } from "src/utils";

@Injectable()
export class AnimalService {
  private subject = new BehaviorSubject<Post>(null);
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("/assets/db.json");
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(fakeAnimalsApiUrl);
  }

  public createPost(postFormData): Observable<Post> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('Authorization'))}`,

      }),
    }
    return this.http
      .post<Post>(backendURL + postsCreateURL, postFormData, httpOptions)
      .pipe(
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

  public createPost(postFormData) {
    return this.http.post<Post>(fakeAnimalsApiUrl, postFormData);
  }
}
