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
  readonly ROOT_URL = 'http://192.168.1.46:8080/';
  // variable named posts can take any type
 // posts: any;
  constructor(private http: HttpClient) {}
  getData():Observable<any> {
    return this.http.get(this.ROOT_URL)
  }
  // getPosts() {
  //   this.posts = this.http.get(this.ROOT_URL + '/');
  // }
}

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
// }