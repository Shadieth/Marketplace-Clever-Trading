import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../products.repository';
import { Category } from '@prisma/client'; // Asegúrate de importar Category correctamente

@Injectable()
export class GetAllByCategoryService {
  constructor(private readonly productRepository: ProductRepository) {}

  // Llamar al repositorio para obtener productos filtrados por categoría
  async getProductsByCategory(category: Category) {
    return this.productRepository.getProductsByCategory(category);
  }
}
