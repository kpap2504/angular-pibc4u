import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";

  posts: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + "/posts");
  }
}
