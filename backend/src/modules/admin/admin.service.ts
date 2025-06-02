import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Servicio para acceder a la base de datos con Prisma
import { Role } from '@prisma/client'; // Enum de roles definido en Prisma

@Injectable()
export class AdminService {
  // Inyectamos PrismaService para acceder a la base de datos
  constructor(private prisma: PrismaService) {}

  // Obtener todos los usuarios registrados
  findAllUsers() {
    return this.prisma.user.findMany();
  }

  // Obtener todos los productos
  deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  // Obtener un usuario por ID
  updateProduct(id: string, data: any) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  // Actualizar un usuario por ID
  updateUser(id: string, data: any) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Cambiar el rol de un usuario
  changeUserRole(id: string, role: Role) {
    return this.prisma.user.update({
      where: { id },
      data: { role },
    });
  }
}
