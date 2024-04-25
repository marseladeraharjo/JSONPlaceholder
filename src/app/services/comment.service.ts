import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // return list of comment by postId
  getCommentsByPostId(id: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/posts/${id}/comments`;
    return this.http.get<Comment[]>(url);
  }

  createComment(comment: Comment): Observable<Comment> {
    const url = `${this.baseUrl}/comments`;
    return this.http.post<Comment>(url, comment, this.httpOptions);
  }

  updateComment(comment: Comment): Observable<Comment> {
    const url = `${this.baseUrl}/comments`;
    return this.http.put<Comment>(
      `${url}/${comment.id}`,
      comment,
      this.httpOptions
    );
  }

  deleteComment(id: number): Observable<Comment> {
    const url = `${this.baseUrl}/posts`;
    return this.http.delete<Comment>(`${url}/${id}`);
  }
}
