import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  user!: User;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.postService
        .getPostsByUserId(params['id'])
        .subscribe((res: Post[]) => {
          this.posts = res;
        });
    });
    this.activatedRoute.params.subscribe((params) => {
      this.userService.getUser(params['id']).subscribe((res: User) => {
        this.user = res;
      });
    });
  }

  getPostDetail(id: number) {
    this.router.navigate(['post/detail', id]);
  }

  ngOnInit(): void {}
}
