import { IsEmail, IsOptional, IsString } from 'class-validator';
import CreateUserDto from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  address: string;
}

export default UpdateUserDto;
