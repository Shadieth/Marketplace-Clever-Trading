import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Asumiendo que tienes un PrismaService configurado
import { User } from './interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un nuevo usuario
  async create(data: { name: string; email: string }): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Obtener un usuario por id
  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Actualizar un usuario
  async update(id: string, data: { name?: string; email?: string }): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Eliminar un usuario
  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

