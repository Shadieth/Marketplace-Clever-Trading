import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';
import * as bcrypt from 'bcrypt';

let currentUser: User | null = null;

@Injectable()
export class LoginService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(email: string, password: string): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Credenciales inválidas');

    currentUser = user; // ✅ Guardamos al usuario "logueado"

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

// Función auxiliar para recuperar el usuario actual desde fuera
export function getLoggedUser(): User | null {
  return currentUser;
}

