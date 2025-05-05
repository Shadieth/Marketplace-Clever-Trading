import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateProductService } from './services/create-product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '@prisma/client';
import { GetAllByCategoryService } from './services/get-all-products-by-category.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly getAllByCategoryService: GetAllByCategoryService, // Asegúrate de importar el servicio correcto
  ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.create(createProductDto);
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
