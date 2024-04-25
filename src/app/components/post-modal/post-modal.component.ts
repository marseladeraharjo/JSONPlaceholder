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
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css'],
})
export class PostModalComponent implements OnChanges {
  @Input() post!: Post;
  @Input() actionStatus: Action = Action.CREATE;
  @Output() addPost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() editPost: EventEmitter<Post> = new EventEmitter<Post>();

  form!: FormGroup;
  isFormValid: boolean = false;
  userId: number;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userId = activatedRoute.snapshot.params['id'] as number;
    this.form = this.formBuilder.group({
      userId: this.userId,
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  private editForm(): void {
    this.form.patchValue({
      userId: this.post.userId,
      title: this.post.title,
      body: this.post.body,
    });
  }

  private initialForm(): void {
    this.form = this.formBuilder.group({
      id: this.post.id,
      userId: this.userId,
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.actionStatus === Action.CREATE) {
      this.post = {
        id: 0,
        userId: Number(this.form.value.userId),
        title: this.form.value.title,
        body: this.form.value.body,
      };
      this.postService.createPost(this.post).subscribe((data) => {
        this.addPost.emit(data);
      });
    }

    if (this.actionStatus === Action.UPDATE) {
      this.post = {
        id: this.post.id,
        userId: Number(this.form.value.userId),
        title: this.form.value.title,
        body: this.form.value.body,
      };
      this.postService.updatePost(this.post).subscribe((data: Post) => {
        this.editPost.emit(data);
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
