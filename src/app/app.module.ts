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

@NgModule({
  declarations: [AppComponent, NavbarComponent, UserListComponent, PostListComponent, AlbumListComponent, PostDetailComponent, CommentListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
