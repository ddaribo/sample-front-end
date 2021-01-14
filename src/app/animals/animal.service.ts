import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Post } from "../shared/models/post";
import { backendURL, postsCreateURL, postsURL } from "src/utils";

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

  getAnimalById(animalId: number): any {
    return this.http.get<Post[]>(backendURL + postsURL + animalId);
  }

  public createPost(postData): Observable<Post> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('Authorization'))}`,

      }),
    }
    return this.http
      .post<Post>(backendURL + postsCreateURL, postData, httpOptions)
      .pipe(
        tap((post) => {
          this.subject.next(post);
        })
      );
  }

  // Currently delete request is not supported by backend
  public deletePost(postId: number){
    return this.http.delete(backendURL + postsURL + postId);
  }
}

