import { Injectable, OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // Esta clase extiende PrismaClient y se encarga de la conexión a la base de datos
  constructor() {
    super();
  }

  // Implementamos los métodos de OnModuleInit y OnModuleDestroy para manejar la conexión
  async onModuleInit() {
    await this.$connect();
    console.log('✅ Conectado a PostgreSQL con Prisma');
  }

  // Método para desconectar Prisma al cerrar el módulo
  async onModuleDestroy() {
    await this.$disconnect();
    console.log('🔌 Prisma desconectado correctamente');
  }

  // Método para habilitar los hooks de cierre de la aplicación
  async enableShutdownHooks(app: INestApplication) {
    app.enableShutdownHooks();
    process.on('beforeExit', async () => {
      await this.$disconnect();
      console.log('🔌 Prisma se desconectó antes de salir');
    });
  }
}


