import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // Método para obtener todos los usuarios
  // async getAllUsers(): Promise<User[]> {
  //   return this.userRepository.findAll(); // Prisma buscará todos los usuarios
  // }
}