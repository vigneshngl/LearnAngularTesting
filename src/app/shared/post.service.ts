import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Post {
  userId : string
  id : number
  title : string
  body : string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  REST_API = "http://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient : HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.REST_API}`)
  }

}
