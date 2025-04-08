import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Asegúrate de que PrismaService esté correctamente configurado
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface'; // Importa la interfaz del producto
import { Category, Country, ShippingOptions } from '@prisma/client'; // Importa los enums desde Prisma

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Crear un nuevo producto
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = await this.prisma.product.create({
      data: {
        title: createProductDto.title,
        description: createProductDto.description,
        price: createProductDto.price,
        minOrder: createProductDto.minOrder,
        stock: createProductDto.stock,
        country: createProductDto.country, // El campo `country` debe ser del tipo `Country` (enum)
        brand: createProductDto.brand,
        shippingOptions: createProductDto.shippingOptions as ShippingOptions[], // Asegúrate de que shippingOptions sea un array de `ShippingOptions`
        shippingCountries: createProductDto.shippingCountries as Country[], // Asegúrate de que shippingCountries sea un array de `Country`
        images: createProductDto.images,
        sellerId: createProductDto.sellerId,
        category: createProductDto.category as Category, // El campo `category` debe ser del tipo `Category` (enum)
      },
    });

    // Devuelve el producto con la interfaz Product, puedes mapear los campos si es necesario
    return {
      id: createdProduct.id,
      title: createdProduct.title,
      description: createdProduct.description,
      price: createdProduct.price, // Prisma usa Decimal, lo convertimos a string
      minOrder: createdProduct.minOrder,
      stock: createdProduct.stock,
      country: createdProduct.country,
      brand: createdProduct.brand,
      shippingOptions: createdProduct.shippingOptions,
      shippingCountries: createdProduct.shippingCountries,
      images: createdProduct.images,
      sellerId: createdProduct.sellerId,
      category: createdProduct.category, // Mapeamos también la categoría
      createdAt: createdProduct.createdAt,
      updatedAt: createdProduct.updatedAt,
    };
  }

  // Obtener todos los productos filtrados por categoría
  async getProductsByCategory(category: Category): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        category: category, // Filtrar por la categoría
      },
    });
  }
}




