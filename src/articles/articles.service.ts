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

  // 全記事を取得
  async getArticles(): Promise<Articles[]> {
    const articles = await this.prisma.articles.findMany();
    return articles;
  }

  // 記事を作成
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

  // userIdを元に記事を取得
  async getUserArticles(user_id: number): Promise<Articles[]> {
    const user = this.prisma.users.findUnique({
      where: { id: user_id },
      select: { articles: true },
    });

    return (await user).articles;
  }
}
