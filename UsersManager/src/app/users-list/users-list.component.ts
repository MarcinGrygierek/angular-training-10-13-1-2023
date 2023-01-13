import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnDestroy {
  users: Observable<User[]> = this.usersService.users;
  usersCount: Observable<number> = this.usersService.usersCount;

  usersSub!: Subscription;

  constructor(private usersService: UsersService) {
    this.usersSub = this.users.subscribe(newUsers => {
      console.log('I got new users', newUsers);
    })
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }
}
