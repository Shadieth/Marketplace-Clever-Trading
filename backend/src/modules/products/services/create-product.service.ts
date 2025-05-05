import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../products.repository'; // Asegúrate de que el repositorio esté bien importado
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../interface/product.interface';

@Injectable()
export class CreateProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.createProduct(createProductDto);
  }
  // Método creado por YOEL
  // Método agregado para obtener todos los productos
  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}

