import { IsString, IsEmail } from 'class-validator';

// DTO para el inicio de sesión de un usuario
export class LoginDto {
  // Validación de email y contraseña
  @IsEmail()
  email: string;

  @IsString()
  password: string;
} 