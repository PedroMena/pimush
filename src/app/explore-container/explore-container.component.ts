import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

// http://10.0.0.22:3000
// https://jsonplaceholder.typicode.com/
readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
// variable named posts can take any type
posts: any;
constructor(private http: HttpClient) {}

getPosts() {
  this.posts = this.http.get(this.ROOT_URL + '/');
}

  ngOnInit() {}

}

