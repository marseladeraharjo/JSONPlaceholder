import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user/:id/posts', component: PostListComponent },
  { path: '**', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
