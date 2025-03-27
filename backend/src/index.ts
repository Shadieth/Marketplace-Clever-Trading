import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3001;
  const host = process.env.HOST ?? 'localhost';

  // Habilitar el cierre limpio de Prisma
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  // ✅ HABILITAR CORS AQUÍ
  app.enableCors({
    origin: 'http://localhost:4200', // O '*' para permitir todos (no recomendado en producción)
    credentials: true
  });
  // Habilitar las validaciones globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, 
    transform: true, 
  }));
  
  await app.listen(port, host);
  console.log(`🚀 Servidor corriendo en cd http://${host}:${port}`);
}

bootstrap();

