import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import { GetAllUsersService } from './services/get-all-users.services';
import { GetByEmailService } from './services/get-by-email.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getAllUsersService: GetAllUsersService,
    private readonly getByEmailService: GetByEmailService,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.getAllUsersService.getAllUsers();
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.getByEmailService.login(loginDto.email, loginDto.password);
  }
}
