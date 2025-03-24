import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository'; // Asegúrate de importar el repositorio
import { User } from '../interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: { name: string; email: string; password: string }): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
  }
}
