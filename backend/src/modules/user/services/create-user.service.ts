import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { UserRepository } from '../users.repository'; 
import { User } from '../interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { Role, Country } from '@prisma/client';


@Injectable() // Asegúrate de que el repositorio esté bien importado
export class CreateUserService {
  // Inyectamos el repositorio de usuarios para acceder a la base de datos
  // y realizar operaciones CRUD sobre los usuarios
  constructor(private readonly userRepository: UserRepository) {}

  // Método para crear un nuevo usuario
  async createUser(data: { 
    name: string; 
    email: string; 
    password: string; 
    role: Role;
    country: Country;
    mobile?: string;
  }): Promise<User> {
    try {
      const existingUser = await this.userRepository.findByEmail(data.email);
      
      if (existingUser) {
        throw new ConflictException('Email is already in use');
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);

      const newUser = await this.userRepository.create({
        ...data,
        password: hashedPassword,
        role: data.role ?? Role.SELLER,
      });
      
      return newUser;
    } catch (error) {
      console.error('❌ Error en createUserService:', error);
      
      if (error instanceof ConflictException) {
        throw error;
      }

      throw new InternalServerErrorException('Error creating user');
    }
  }
}
