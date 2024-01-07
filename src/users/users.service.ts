import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interfaces';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    const allUsers = await this.prisma.users.findMany();
    return allUsers;
  }

  async findOne(user_id: number): Promise<User> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });

    return user;
  }

  create(user: User) {
    this.users.push(user);
    return this.users;
  }
}
