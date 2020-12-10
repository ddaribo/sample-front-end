import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ReadDataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("/assets/db.json");
  }
}
