import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { Articles } from 'interfaces/articles.interfaces';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get()
  async getArticles(): Promise<Articles[]> {
    return this.articleService.getArticles();
  }

  @Get('user/:id')
  async getUserArticles(@Param('id') id: string): Promise<Articles[]> {
    // paramはstringで取得されるのでnumberに変換する必要がある
    const user_id = parseInt(id, 10);
    return this.articleService.getUserArticles(user_id);
  }

  @Post()
  async createArticles(@Body() createArticleDto: Articles): Promise<Articles> {
    return this.articleService.createArticle(createArticleDto);
  }

  @Put(':id')
  async UpdateArticle(
    @Param('id') id: string,
    @Body() updateArticleDto: { text: string },
  ) {
    const article_id = parseInt(id, 10);
    return this.articleService.updateArticle(article_id, updateArticleDto);
  }
}
