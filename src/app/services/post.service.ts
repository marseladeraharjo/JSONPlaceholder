import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // return list of post by user id
  getPostsByUserId(id: number): Observable<Post[]> {
    const url = `${this.baseUrl}/users/${id}/posts`;
    return this.http.get<Post[]>(url);
  }
}
