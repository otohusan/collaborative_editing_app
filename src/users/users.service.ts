import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interfaces';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAll() {
    return 'return all';
  }

  create(user: User) {
    this.users.push(user);
    return this.users;
  }
}
