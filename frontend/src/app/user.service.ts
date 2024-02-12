import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://localhost:8080/user"
  constructor(private HttpClient:HttpClient) { }
  createUser(user:User):Observable<User>{
    return this.HttpClient.post<User>(`${this.baseUrl}/register`,user);
  }
  loginUser(user:User):Observable<User>{
    return this.HttpClient.post<User>(`${this.baseUrl}/login`,user);
  }
}
