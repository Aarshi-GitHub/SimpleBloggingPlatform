import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl="http://localhost:8080/blogs/"
  constructor(private httpClient:HttpClient) {}
  getPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseUrl}`);
  }
  getPostsUser(username:string):Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseUrl}user/`+username);
  }
  getPost(id:number):Observable<Post>{
    return this.httpClient.get<Post>(`${this.baseUrl}`+id);
  }
  createPost(post:Post,username:String):Observable<Post>{
    return this.httpClient.post<Post>(`${this.baseUrl}create/`+username,post);
  }
  updatePost(id:number,post:Post,username:string):Observable<Post>{
    return this.httpClient.put<Post>(`${this.baseUrl}update/`+id+"/"+username,post);
  }
  deletePost(id:number,username:string):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseUrl}delete/`+id+"/"+username);
  }
}
