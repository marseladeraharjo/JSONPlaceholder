import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // return list of post by user id
  getPostsByUserId(id: number): Observable<Post[]> {
    const url = `${this.baseUrl}/users/${id}/posts`;
    return this.http.get<Post[]>(url);
  }

  // return post by id
  getPostDetail(id: number): Observable<Post> {
    const url = `${this.baseUrl}/posts/${id}`;
    return this.http.get<Post>(url);
  }

  createPost(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/posts`;
    return this.http.post<Post>(url, post, this.httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/posts`;
    return this.http.put<Post>(`${url}/${post.id}`, post, this.httpOptions);
  }

  deletePost(postId: number): Observable<Post> {
    const url = `${this.baseUrl}/posts`;
    return this.http.delete<Post>(`${url}/${postId}`);
  }
}
