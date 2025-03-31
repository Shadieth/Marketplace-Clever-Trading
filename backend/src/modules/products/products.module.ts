import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Asegúrate de que PrismaService esté en la carpeta correcta
import { CreateProductService } from './services/create-product.service'; // Asegúrate de que CreateProductService esté en la carpeta correcta
import { ProductRepository } from './products.repository'; // Asegúrate de importar el repositorio
import { ProductsController } from './products.controller'; // Asegúrate de que ProductsController esté en la carpeta correcta

@Module({
  imports: [],
  providers: [
    PrismaService,          // PrismaService para acceso a base de datos
    ProductRepository,      // ProductRepository para manejar las operaciones de productos
    CreateProductService,   // Servicio que gestiona la lógica de negocio
  ],
  controllers: [ProductsController], // Controlador para gestionar las rutas
})
export class ProductsModule {}

