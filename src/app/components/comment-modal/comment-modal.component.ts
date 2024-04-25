import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Action from 'src/app/interfaces/actionStatus';
import { Comment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css'],
})
export class CommentModalComponent implements OnChanges {
  @Input() comment!: Comment;
  @Input() actionStatus: Action = Action.CREATE;
  @Output() addComment: EventEmitter<Comment> = new EventEmitter<Comment>();
  @Output() editComment: EventEmitter<Comment> = new EventEmitter<Comment>();

  form!: FormGroup;
  isFormValid: boolean = false;
  postId: number;

  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.postId = activatedRoute.snapshot.params['id'] as number;
    this.form = this.formBuilder.group({
      postId: this.postId,
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      body: ['', Validators.required],
    });
  }

  private editForm(): void {
    this.form.patchValue({
      postId: this.comment.postId,
      name: this.comment.name,
      email: this.comment.email,
      body: this.comment.body,
    });
  }

  private initialForm(): void {
    this.form = this.formBuilder.group({
      postId: this.postId,
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      body: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.actionStatus === Action.CREATE) {
      this.comment = {
        postId: Number(this.form.value.postId),
        name: this.form.value.name,
        email: this.form.value.email,
        body: this.form.value.body,
      } as Comment;
      this.commentService
        .createComment(this.comment)
        .subscribe((data: Comment) => {
          this.addComment.emit(data);
        });
    }
    if (this.actionStatus === Action.UPDATE) {
      this.comment = {
        postId: Number(this.form.value.postId),
        name: this.form.value.name,
        email: this.form.value.email,
        body: this.form.value.body,
        id: this.comment.id,
      } as Comment;
      this.commentService
        .updateComment(this.comment)
        .subscribe((data: Comment) => {
          this.editComment.emit(data);
        });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.actionStatus === Action.CREATE) {
      this.initialForm();
    }
    if (this.actionStatus === Action.UPDATE) {
      this.editForm();
    }
  }
}
