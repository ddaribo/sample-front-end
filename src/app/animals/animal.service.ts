import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { delay, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Post } from "../shared/models/post";
import { backendURL, postsURL, postsCreateURL, fakeAnimalsApiUrl } from "src/utils";

@Injectable()
export class AnimalService {
  private subject = new BehaviorSubject<Post[]>(null);
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("/assets/db.json");
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(fakeAnimalsApiUrl);
  }

  public createPost(postFormData) {
    return this.http.post<Post>(fakeAnimalsApiUrl, postFormData);
  }
}
