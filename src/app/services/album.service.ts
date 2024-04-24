import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // return list of post by user id
  getAlbumsByUserId(id: number): Observable<Album[]> {
    const url = `${this.baseUrl}/users/${id}/albums`;
    return this.http.get<Album[]>(url);
  }
}
