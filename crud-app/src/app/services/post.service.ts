import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Posts } from '../model/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts =[]
  private baseURL : string = "http://localhost:3000";

  constructor(private http : HttpClient) { }
  
  getPosts() :  Observable<Posts[]>{
    return this.http.get<Posts[]>(`${this.baseURL}/posts`)
    .pipe(catchError(err=>
      {
        console.log("Error at Service Level");
        return throwError(err);
      }));
  }

  createPost(post : Posts): Observable<any>{
    return this.http.post(`${this.baseURL}/posts`, post)
  }

  deletePost(id: number){
    return this.http.delete(`${this.baseURL}/posts/${id}`)
  }

  editPost(id : number, body : string, publish : boolean){
    return this.http.patch(`${this.baseURL}/posts/${id}`,{body, publish})
  }


}
