import { IsString, IsEnum, IsNumber, IsArray, IsOptional, IsUUID } from 'class-validator';
import { ShippingOptions, Country, Category } from '@prisma/client'; // Asegúrate de que estos tipos estén correctamente importados

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;  // Se mantiene como número en el DTO, y se convierte en Decimal en el repositorio

  @IsNumber()
  minOrder: number;

  @IsNumber()
  stock: number;

  @IsEnum(Country)
  country: Country;  // Validación de tipo Country (enum)

  @IsString()
  @IsOptional()
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



