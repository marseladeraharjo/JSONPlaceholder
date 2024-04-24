import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user/:id/posts', component: PostListComponent },
  { path: 'user/:id/albums', component: AlbumListComponent },
  { path: 'post/:id/detail', component: PostDetailComponent },
  { path: 'album/:id/photos', component: PhotoListComponent },
  { path: 'photo/detail/:id', component: PhotoDetailComponent },
  { path: '**', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
