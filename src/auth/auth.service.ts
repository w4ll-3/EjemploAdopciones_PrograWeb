import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  async singIn(email: string, password: string): Promise<boolean> {
    const user = await this.userService.findOneByEmail(email);

    if (user === undefined) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
