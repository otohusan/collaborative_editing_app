import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(user_name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByName(user_name);
    if ((await bcrypt.compare(pass, user?.password)) !== true) {
      //   throw new UnauthorizedException();
      return '失敗';
    }
    // const payload = { sub: user.id, username: user.user_name };
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    // };

    return 'login 成功';
  }
}
