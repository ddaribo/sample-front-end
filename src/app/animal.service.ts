import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Animal } from "./shared/animal";

@Injectable()
export class AnimalService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get("/assets/db.json");
  }
}
