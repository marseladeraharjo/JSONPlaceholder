import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPhotosByAlbumId(id: number): Observable<Photo[]> {
    const url = `${this.baseUrl}/albums/${id}/photos`;
    return this.http.get<Photo[]>(url);
  }
}
