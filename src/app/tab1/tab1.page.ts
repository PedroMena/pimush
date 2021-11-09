import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppComponent} from '../app.component'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
// http://10.0.0.22:3000
// https://jsonplaceholder.typicode.com/
// http://192.168.1.46:8080/

// readonly ROOT_URL = 'http://192.168.199.1:8080/';
readonly ROOT_URL = 'http://httpbin.org/post';

data:Array<any>
name: any
result: any

  // variable named posts can take any type
 // posts: any;
  constructor(private http: AppComponent) {
   this.data = new Array<any>();
  }

  getDataFromAPI() {
    this.http.getData().subscribe((data) => {
      console.log(JSON.stringify(data))
     // this.posts = data;
      this.data = data;
    })
  }
  postDatatoAPI():Observable<string> {
    this.result =  this.http.postData(this.name);
    console.log(this.result);
    return this.result;
    
  }
  // getPosts(): Observable<any> {
  //   return this.http.get(this.ROOT_URL).subscribe(data => console.log(data));
  // }
  // someMethod() {
  //   this.http
  //       .get(this.ROOT_URL)
  //       .subscribe(payload => console.log(payload));


}

//this.http.get(url).map(res => res.json());

// export class ConfigService {
//   constructor(private http: HttpClient) {
//     this.http.get('http://10.0.0.22:3000/').subscribe((response) => {
//       console.log(response);
//   });
//    }
// }