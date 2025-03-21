import { Injectable, OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Conectado a PostgreSQL con Prisma');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('🔌 Prisma desconectado correctamente');
  }

  async enableShutdownHooks(app: INestApplication) {
    app.enableShutdownHooks();
    process.on('beforeExit', async () => {
      await this.$disconnect();
      console.log('🔌 Prisma se desconectó antes de salir');
    });
  }
}


