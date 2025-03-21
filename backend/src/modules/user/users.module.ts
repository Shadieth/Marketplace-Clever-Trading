import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './services/get-all-users.services';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
