import { Injectable } from '@nestjs/common';
import { Articles } from 'interfaces/articles.interfaces';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ArticlesService {
  constructor(private readonly usersService: UsersService) {}

  async getUserArticles(user_id: number): Promise<Articles[]> {
    const user = this.usersService.findOne(user_id);

    return (await user).articles;
  }
}
