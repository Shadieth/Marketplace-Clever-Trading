import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository'; // Asegúrate de importar el repositorio
import { User } from '../interfaces/user.interface';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: { name: string; email: string }): Promise<User> {
    return this.userRepository.create(data);
  }
}
