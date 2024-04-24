import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/interfaces/album';
import { Photo } from 'src/app/interfaces/photo';
import { AlbumService } from 'src/app/services/album.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  album!: Album;

  constructor(
    private photoService: PhotoService,
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.photoService
        .getPhotosByAlbumId(params['id'])
        .subscribe((res: Photo[]) => {
          this.photos = res;
        });
    });
    this.activatedRoute.params.subscribe((params) => {
      this.albumService.getAlbum(params['id']).subscribe((res: Album) => {
        this.album = res;
      });
    });
  }

  ngOnInit(): void {}
}
