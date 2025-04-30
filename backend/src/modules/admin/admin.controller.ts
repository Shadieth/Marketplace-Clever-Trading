import { Controller, Delete, Get, Param, UseGuards, Patch, Body } from '@nestjs/common';
import { RolesGuard } from './roles.guard'; // ajusta la ruta si es diferente
import { Roles } from './roles.decorator';   // ajusta la ruta si es diferente
import { AdminService } from './admin.service';
import { Role } from '@prisma/client';

@UseGuards(RolesGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // 1. Ver todos los usuarios
  @Get('users')
  @Roles('ADMIN')
  findAllUsers() {
    return this.adminService.findAllUsers();
  }

  // 2. Eliminar usuario por ID
  @Delete('users/:id')
  @Roles('ADMIN')
  deleteUser(@Param('id') id: string) {
    return this.adminService.deleteUser(id);
  }

  // 3. Modificar publicaciones
  @Patch('products/:id')
  @Roles('ADMIN')
  updateProduct(@Param('id') id: string, @Body() data: any) {
    return this.adminService.updateProduct(id, data);
  }

  // 4. Modificar datos del perfil del usuario
  @Patch('users/:id')
  @Roles('ADMIN')
  updateUser(@Param('id') id: string, @Body() data: any) {
    return this.adminService.updateUser(id, data);
  }

  // 5. Cambiar rol de usuario
  @Patch('users/:id/role')
  @Roles('ADMIN')
  changeUserRole(@Param('id') id: string, @Body('role') role: Role) {
    return this.adminService.changeUserRole(id, role);
  }
}
