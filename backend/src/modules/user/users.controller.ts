import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import { GetAllUsersService } from './services/get-all-users.services';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getAllUsersService: GetAllUsersService,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.getAllUsersService.getAllUsers();
  }
}
