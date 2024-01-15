import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticlesController } from './articles/articles.controller';
import { ArticlesService } from './articles/articles.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { ArticlesGateway } from './app.gateway';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ArticlesController, UsersController],
  providers: [AppService, ArticlesService, UsersService, ArticlesGateway],
})
export class AppModule {}
