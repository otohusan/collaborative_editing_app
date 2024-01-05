import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'interfaces/user.interfaces';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): string {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Hi Jon ${id}`;
  }

  @Post()
  async create(@Body() user: User): Promise<User[]> {
    return this.usersService.create(user);
  }
}
