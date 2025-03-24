import { IsString, IsEmail, MinLength } from 'class-validator';  // Usa class-validator para validaciones

export class CreateUserDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
