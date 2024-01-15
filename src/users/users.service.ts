import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interfaces';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
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

  async create(user: User) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
    return await this.prisma.users.create({
      data: {
        user_name: user.user_name,
        hobby: user.hobby,
        password: hashedPassword,
      },
    });
  }
}
