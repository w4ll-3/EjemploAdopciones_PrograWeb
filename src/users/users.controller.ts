import CreateUserDto from './dtos/create-user.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  findAll() {
    const records = this.UsersService.findAll();
    return records;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.UsersService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.UsersService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: string) {
    return `this action destroys the user: ${id}`;
  }
}
