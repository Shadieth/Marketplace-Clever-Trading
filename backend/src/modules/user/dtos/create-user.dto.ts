import { IsString, IsEmail } from 'class-validator';  // Usa class-validator para validaciones

export class CreateUserDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
