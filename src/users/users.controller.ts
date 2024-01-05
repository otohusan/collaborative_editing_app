import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns super cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Hi Jon ${id}`;
  }
}
