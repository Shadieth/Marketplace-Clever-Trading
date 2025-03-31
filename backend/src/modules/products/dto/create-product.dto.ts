import { IsString, IsEnum, IsNumber, IsArray, IsOptional, IsUUID } from 'class-validator';
import { ShippingOptions, Country } from '@prisma/client'; // Asegúrate de que estos tipos estén correctamente importados

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;  // Aunque es un number, lo convertimos a Decimal en el repositorio

  @IsNumber()
  minOrder: number;

  @IsNumber()
  stock: number;

  @IsEnum(Country)
  country: Country;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsArray()  // Cambiado a array
  @IsEnum(ShippingOptions, { each: true })  // Ahora es un array de ShippingOptions
  shippingOptions: ShippingOptions[];

  @IsArray()
  @IsEnum(Country, { each: true })
  shippingCountries: Country[];

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsUUID()
  sellerId: string;
}


