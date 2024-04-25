import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Action from 'src/app/interfaces/actionStatus';
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
  post!: Post;
  user!: User;
  userId: string = '';

  actionStatus: Action = Action.CREATE;

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
    this.router.navigate(['post/', id, 'detail']);
  }

  openModal() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.actionStatus = Action.CREATE;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  editPost(post: Post) {
    this.post = post;
    this.actionStatus = Action.UPDATE;
  }

  updatePost(post: Post) {
    this.posts = this.posts.map((p) => {
      if (p.id === post.id) {
        return post;
      }
      return p;
    });
  }

  deletePost(postId: number) {
    this.postService.deletePost(postId).subscribe((data) => {
      this.posts = this.posts.filter((p) => p.id !== postId);
    });
  }

  ngOnInit(): void {}
}
