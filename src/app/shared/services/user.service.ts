import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  public addUser(username: string): void {
    const users = [...this.users$.value, username];
    this.users$.next(users);
  }
}
