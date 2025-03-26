import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserRepository } from './users.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserService } from './services/create-user.service';
import { GetAllUsersService } from './services/get-all-users.services';
import { GetByEmailService } from './services/get-by-email.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    GetAllUsersService,
    CreateUserService, 
    GetByEmailService,
    UserRepository, 
    PrismaService],
})
export class UserModule {}
