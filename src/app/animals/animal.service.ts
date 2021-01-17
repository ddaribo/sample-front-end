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

  public deletePost(postId: number){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('Authorization'))}`,
      })
    }

    this.subject.next(null);

    return this.http.delete(backendURL + postsURL + postId + '/delete/', httpOptions);
  }

  public sendAdoptionRequest(postId: number){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization': `JWT ${JSON.parse(localStorage.getItem('Authorization'))}`,
      })
    }

    return this.http.get(backendURL + postsURL + postId + '/send-adoption-request/', httpOptions);
  }
}
