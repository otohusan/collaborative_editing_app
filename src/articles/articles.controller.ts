import { Controller, Get, Param } from '@nestjs/common';
import { Articles } from 'interfaces/articles.interfaces';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articleService: ArticlesService) {}

  @Get('user/:id')
  async getArticles(@Param('id') id: string): Promise<Articles[]> {
    // paramはstringで取得されるのでnumberに変換する必要がある
    const user_id = parseInt(id, 10);
    return this.articleService.getUserArticles(user_id);
  }
}
