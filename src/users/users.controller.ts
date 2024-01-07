import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'interfaces/user.interfaces';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user_id = parseInt(id, 10);
    return this.usersService.findOne(user_id);
  }

  @Post()
  async create(@Body() user: User): Promise<User[]> {
    return this.usersService.create(user);
  }
}
