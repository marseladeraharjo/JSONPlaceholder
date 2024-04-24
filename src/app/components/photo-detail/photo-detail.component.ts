import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
})
export class PhotoDetailComponent {
  photo!: Photo;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.photoService.getPhotoDetail(params['id']).subscribe((res: Photo) => {
        this.photo = res;
      });
    });
  }
}
