import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
// http://10.0.0.22:3000
// https://jsonplaceholder.typicode.com/
  readonly ROOT_URL = 'http://10.0.0.22:3000/';
  // variable named posts can take any type
  posts: any;
  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL);
  }
}

// export class ConfigService {
//   constructor(private http: HttpClient) {
//     this.http.get('http://10.0.0.22:3000/').subscribe((response) => {
//       console.log(response);
//   });
//    }
// }