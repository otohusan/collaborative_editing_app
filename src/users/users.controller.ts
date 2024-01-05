import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns super cats';
  }

  @Post()
  findOne(): string {
    return 'Hi Jon';
  }
}
