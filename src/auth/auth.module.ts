import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsersModule],
  providers: [AuthService, UsersService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
