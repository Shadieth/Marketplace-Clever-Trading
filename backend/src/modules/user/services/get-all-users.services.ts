import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class GetAllUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<Omit<User, 'password'>[]> {
    try {
      const users = await this.userRepository.findAll();
      if (!users || users.length === 0) {
        throw new NotFoundException('No se encontraron usuarios');
      }
      return users.map(user => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      });
    } catch (error) {
      throw new NotFoundException('Error al obtener los usuarios');
    }
  }
}