import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/interfaces/album';
import { User } from 'src/app/interfaces/user';
import { AlbumService } from 'src/app/services/album.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  user!: User;

  constructor(
    private albumService: AlbumService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.albumService
        .getAlbumsByUserId(params['id'])
        .subscribe((res: Album[]) => {
          this.albums = res;
        });
    });
    this.activatedRoute.params.subscribe((params) => {
      this.userService.getUser(params['id']).subscribe((res: User) => {
        this.user = res;
      });
    });
  }

  getPhotosByAlbumId(id: number) {
    this.router.navigate(['album/', id, 'photos']);
  }

  ngOnInit(): void {}
}
