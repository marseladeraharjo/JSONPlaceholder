import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  // use user service to get list of user
  getUserList(): void {
    this.userService.getUserList().subscribe((users) => {
      this.users = users;
    });
  }

  getUserPosts(id: number) {
    this.router.navigate(['user/', id, 'posts']);
  }

  ngOnInit(): void {
    this.getUserList();
  }
}
