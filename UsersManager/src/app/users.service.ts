import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users: Observable<User[]> = this.users$.asObservable();

  private usersCount$: Subject<number> = new Subject<number>();
  public usersCount: Observable<number> = this.usersCount$.asObservable();

  public addUser = (name: string, surname: string) => {
    const currentUsers = this.users$.getValue();
    const newUser: User = {
      name,
      surname,
      id: Math.round(Math.random() * 10000000).toString()
    }
    this.users$.next([...currentUsers, newUser]);
    this.usersCount$.next(currentUsers.length + 1);
  }
}
