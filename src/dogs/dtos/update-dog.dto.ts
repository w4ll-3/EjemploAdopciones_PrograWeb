import { PartialType } from '@nestjs/mapped-types';
import CreateDogDto from './create-dog.dto';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Genero } from '../entities/dog.entity';

class UpdateDogDto extends PartialType(CreateDogDto) {
  @IsOptional()
  @IsString()
  raza: string;

  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsNumber()
  edad: number;

  @IsOptional()
  @IsNumber()
  peso: number;

  @IsOptional()
  @IsEnum(Genero)
  genero: Genero;
}

export default UpdateDogDto;
