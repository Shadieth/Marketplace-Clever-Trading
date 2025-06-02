import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import { GetAllUsersService } from './services/get-all-users.services';
import { LoginService } from './services/login.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';

// Importamos los decoradores necesarios de NestJS
@Controller('users') // Ruta base para todos los endpoints relacionados con usuarios
export class UserController {
  // Inyectamos los servicios necesarios para manejar las operaciones de usuario
  // CreateUserService para crear nuevos usuarios
  // GetAllUsersService para obtener todos los usuarios
  // LoginService para realizar el inicio de sesión
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getAllUsersService: GetAllUsersService,
    private readonly loginService: LoginService,
  ) {}

  // Definimos los endpoints de la API para manejar las operaciones de usuario
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }

  // Endpoint para obtener todos los usuarios
  @Get()
  async getAllUsers() {
    return this.getAllUsersService.getAllUsers();
  }

  // Endpoint para iniciar sesión
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto.email, loginDto.password);
  }
}
