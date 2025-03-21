import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';  // Asumo que tienes un servicio PrismaService
import { User } from './interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener todos los usuarios
  async findAll(): Promise<User[]>  {
    return this.prisma.user.findMany();  // Prisma consulta para obtener todos los usuarios
  }
}

