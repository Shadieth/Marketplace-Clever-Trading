import { IsString, IsEnum, IsNumber, IsArray, IsOptional, IsUUID } from 'class-validator';
import { ShippingOptions, Country, Category } from '@prisma/client'; // Enums importados desde Prisma

// DTO para crear un producto
export class CreateProductDto {
  @IsString()   // Valida que sea una cadena de texto
  title: string;

  @IsString() // Validación de tipo string
  description: string;

  @IsNumber() // Valida que sea un número
  price: number;  // Se maneja como número aquí, y Prisma lo convierte a Decimal internamente

  @IsNumber() // Número entero que representa el pedido mínimo
  minOrder: number;

  @IsNumber() // Stock disponible
  stock: number;

  @IsEnum(Country) // Valida que el valor pertenezca al enum Country
  country: Country;  

  @IsString()
  @IsOptional() // Este campo es opcional
  brand?: string;  // Marca es opcional

  @IsArray()
  @IsEnum(ShippingOptions, { each: true })  // Array de ShippingOptions (enum)
  shippingOptions: ShippingOptions[];

  @IsArray()
  @IsEnum(Country, { each: true })  // Array de Country (enum) para países de envío
  shippingCountries: Country[];

  @IsArray()
  @IsString({ each: true })  // Array de cadenas de texto (URLs de imágenes)
  images: string[];

  @IsUUID()
  sellerId: string;  // Validación de sellerId como UUID válido

  @IsEnum(Category)  // Asegúrate de que el campo `category` sea un enum de `Category`
  category: Category;  // Este campo también debe estar presente en el DTO si el modelo lo requiere
}



