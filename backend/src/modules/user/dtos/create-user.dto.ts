import { IsString, IsEmail, MinLength, IsEnum, IsOptional } from 'class-validator';  
import { Role, Country } from '@prisma/client';

export class CreateUserDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(Role)  // Valida que el rol sea CLIENT o SELLER
  role: Role;

  @IsEnum(Country)
  country: Country;

  @IsString()
  @IsOptional()
  mobile?: string;
}

