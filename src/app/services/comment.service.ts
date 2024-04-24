import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // return list of comment by postId
  getCommentsByPostId(id: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/posts/${id}/comments`;
    return this.http.get<Comment[]>(url);
  }
}
