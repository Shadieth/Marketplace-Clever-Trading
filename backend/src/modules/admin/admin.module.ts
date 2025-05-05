import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { PrismaService } from '../../prisma/prisma.service'; // o donde esté

@Module({
  controllers: [AdminController],
  providers: [AdminService, PrismaService],
})
export class AdminModule {}
