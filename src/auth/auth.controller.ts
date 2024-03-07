import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dto/sing-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() auth: SingInDto) {
    const result = await this.authService.singIn(auth.email, auth.password);
    return result;
  }
}
