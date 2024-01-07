import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interfaces';
import { Articles } from 'interfaces/articles.interfaces';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    const allUsers = await this.prisma.users.findMany({
      include: { articles: true },
    });
    return allUsers;
  }

  async findOne(user_id: number): Promise<User> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: user_id,
      },
      include: { articles: true },
    });

    return user;
  }

  async getUserArticles(user_id: number): Promise<Articles[]> {
    const user = this.findOne(user_id);

    return (await user).articles;
  }

  create(user: User) {
    this.users.push(user);
    return this.users;
  }
}
