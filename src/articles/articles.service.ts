import { Injectable } from '@nestjs/common';
import { Articles } from 'interfaces/articles.interfaces';
import { UsersService } from 'src/users/users.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticlesService {
  private readonly prisma: PrismaClient;

  constructor(private readonly usersService: UsersService) {
    this.prisma = new PrismaClient();
  }

  async getArticles(): Promise<Articles[]> {
    const articles = await this.prisma.articles.findMany();
    return articles;
  }

  async createArticle(data: {
    text: string;
    userId: number;
  }): Promise<Articles> {
    return await this.prisma.articles.create({
      data: {
        text: data.text,
        userId: data.userId,
      },
    });
  }

  async getUserArticles(user_id: number): Promise<Articles[]> {
    const user = this.usersService.findOne(user_id);

    return (await user).articles;
  }
}
