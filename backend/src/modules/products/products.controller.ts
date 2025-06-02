import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateProductService } from './services/create-product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '@prisma/client';
import { GetAllByCategoryService } from './services/get-all-products-by-category.service';

@Controller('products') // Ruta base para todos los endpoints: /products
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly getAllByCategoryService: GetAllByCategoryService, // Asegúrate de importar el servicio correcto
  ) {}

  // Endpoint POST para crear un nuevo producto
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.create(createProductDto); // Crea un nuevo producto a partir del DTO validado
  }

   // Endpoint GET para obtener productos filtrados por categoría
   @Get()
   async getProducts(@Query('category') category: Category) {
     // Validar que se haya pasado una categoría válida
     if (!category) {
       throw new Error('Category is required');
     }
 
     return this.getAllByCategoryService.getProductsByCategory(category);
   }
}
