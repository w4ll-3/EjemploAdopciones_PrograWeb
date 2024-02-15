import {
  IsEnum,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Genero } from '../entities/dog.entity';

export default class CreateDogDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  raza: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  nombre: string;

  @IsNumber()
  edad: number;

  @IsNumber()
  peso: number;

  @IsEnum(Genero)
  genero: Genero;
}
