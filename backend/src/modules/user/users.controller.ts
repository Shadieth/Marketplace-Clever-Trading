import { Controller, Get } from '@nestjs/common';
import { UserService } from '../user/services/get-all-users.services'; // Importa correctamente tu servicio


@Controller('users') // Ruta base '/users'
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Método GET para obtener todos los usuarios
  // @Get()
  // async getAllUsers(): Promise<User[]> {
  //   return this.userService.getAllUsers(); // Llama al método getAllUsers del servicio
  // }
}
