import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Action from 'src/app/interfaces/actionStatus';
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
  comment!: Comment;
  commentId: string = '';

  actionStatus: Action = Action.CREATE;

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

  openModal() {
    this.commentId = this.activatedRoute.snapshot.params['id'];
    this.actionStatus = Action.CREATE;
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  editComment(comment: Comment) {
    this.comment = comment;
    this.actionStatus = Action.UPDATE;
  }

  updateComment(comment: Comment) {
    this.comments = this.comments.map((c) => {
      if (c.id === comment.id) {
        return comment;
      }
      return c;
    });
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe((data) => {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
    });
  }

  ngOnInit(): void {}
}
