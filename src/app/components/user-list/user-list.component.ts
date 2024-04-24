import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  // use user service to get list of user
  getUserList(): void {
    this.userService.getUserList().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.getUserList();
  }
}
