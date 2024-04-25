import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    PostListComponent,
    AlbumListComponent,
    PostDetailComponent,
    CommentListComponent,
    PhotoListComponent,
    PhotoDetailComponent,
    PostModalComponent,
    CommentModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
