import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // https://jsonplaceholder.typicode.com
  // http://10.0.0.22:3000
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  // variable named posts can take any type
  posts: any;
  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/');
  }
}

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
// }