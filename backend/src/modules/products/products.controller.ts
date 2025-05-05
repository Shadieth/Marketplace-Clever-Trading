import { Controller, Post, Get, Body } from '@nestjs/common'; //Get implementado por Yoel
import { CreateProductService } from './services/create-product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.create(createProductDto);
  }
  // Método creado por YOEL
  // Agrega este método GET para obtener todos los productos
  @Get()
  async findAll() {
    return this.createProductService.findAll();
  }
}
