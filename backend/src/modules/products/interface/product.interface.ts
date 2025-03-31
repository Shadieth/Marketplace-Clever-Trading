import { Country, ShippingOptions } from '@prisma/client'; // Asegúrate de importar los enums de Prisma
import { Decimal } from '@prisma/client/runtime/library';

export interface Product {
  id?: string;          // UUID opcional, generado por la BD
  title: string;
  description: string;
  price: Decimal;
  minOrder: number;
  stock: number;
  country: Country;     // Usar el enum Country
  brand: string;
  shippingOptions: ShippingOptions[]; // Usar el enum ShippingOptions
  shippingCountries: string[]; // Si shippingCountries es un array de strings en Prisma, se puede dejar así
  images: string[];
  sellerId: string;
  createdAt?: Date;     // Opcional, generado por la BD
  updatedAt?: Date;     // Opcional, generado por la BD
}

