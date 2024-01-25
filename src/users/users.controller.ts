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
  Query,
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
  findOne(@Param('id') id: string) {
    return this.UsersService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return body;
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
