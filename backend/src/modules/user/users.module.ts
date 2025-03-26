import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserRepository } from './users.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserService } from './services/create-user.service';
import { GetAllUsersService } from './services/get-all-users.services';
import { PrismaModule } from '../../prisma/prisma.module';
import { LoginUserService } from './services/login-user.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    GetAllUsersService,
    CreateUserService, 
    UserRepository,
    LoginUserService, 
    PrismaService],
})
export class UserModule {}