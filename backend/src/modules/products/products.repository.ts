import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Asegúrate de que PrismaService esté correctamente configurado
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface'; // Importa la interfaz del producto

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
        country: createProductDto.country,
        brand: createProductDto.brand,
        shippingOptions: createProductDto.shippingOptions,
        shippingCountries: createProductDto.shippingCountries,
        images: createProductDto.images,
        sellerId: createProductDto.sellerId,
      },
    });

    // Devuelve el producto con la interfaz Product, puedes mapear los campos si es necesario
    return {
      id: createdProduct.id,
      title: createdProduct.title,
      description: createdProduct.description,
      price: createdProduct.price, // Prisma usa Decimal, por lo que debes asegurarte de convertirlo si es necesario
      minOrder: createdProduct.minOrder,
      stock: createdProduct.stock,
      country: createdProduct.country,
      brand: createdProduct.brand,
      shippingOptions: createdProduct.shippingOptions,
      shippingCountries: createdProduct.shippingCountries,
      images: createdProduct.images,
      sellerId: createdProduct.sellerId,
      createdAt: createdProduct.createdAt,
      updatedAt: createdProduct.updatedAt,
    };
  }
}



