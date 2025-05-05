import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Asumiendo que tienes un PrismaService configurado
import { User } from './interfaces/user.interface';
import { Role, Country } from '@prisma/client';


@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un nuevo usuario
  async create(data: { 
    name: string; 
    email: string; 
    password: string; 
    role: Role;
    country: Country;
    mobile?: string;
  }): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        country: data.country,
        mobile: data.mobile,
      },
    });
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  // Obtener un usuario por id
  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id }
    });
  }

  // Obtener un usuario por email
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email }
    });
  }
}

