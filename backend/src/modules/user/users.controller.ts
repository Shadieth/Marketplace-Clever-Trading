import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import { GetAllUsersService } from './services/get-all-users.services';
import { LoginUserService } from './services/login-user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getAllUsersService: GetAllUsersService,
    private readonly loginUserService: LoginUserService
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }

  @Post('login')
  async loginUser(@Body() body: { email: string; password: string }) {
    return this.loginUserService.login(body.email, body.password);
  }

  @Get()
  async getAllUsers() {
    return this.getAllUsersService.getAllUsers();
  }
  //creado por mi
  @Post()
  async register(@Body() body: { name: string; email: string; password: string }) {
    return this.createUserService.createUser(body);
  }
}
