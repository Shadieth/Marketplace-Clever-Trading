import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class GetAllUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    console.log('Fetching all users...');
    return await this.userRepository.findAll();
  }
}