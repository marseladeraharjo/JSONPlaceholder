import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { Post } from 'src/app/interfaces/post';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  comments: Comment[] = [];

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getPostDetail(params['id']).subscribe((res: Post) => {
        this.post = res;
      });
    });
    this.activatedRoute.params.subscribe((params) => {
      this.commentService
        .getCommentsByPostId(params['id'])
        .subscribe((res: Comment[]) => {
          this.comments = res;
        });
    });
  }

  ngOnInit(): void {}
}
