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
  Res,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query() query) {
    return {
      message: 'This action returns the all users',
      queryParams: query,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns the user: ${id}`;
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
