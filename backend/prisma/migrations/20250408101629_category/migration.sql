-- CreateEnum
CREATE TYPE "ShippingOptions" AS ENUM ('PICKUP', 'NATIONAL', 'INTERNATIONAL');

-- CreateEnum
CREATE TYPE "Country" AS ENUM ('AUSTRIA', 'BELGIUM', 'BULGARIA', 'CROATIA', 'CYPRUS', 'CZECH_REPUBLIC', 'DENMARK', 'ESTONIA', 'FINLAND', 'FRANCE', 'GERMANY', 'GREECE', 'HUNGARY', 'IRELAND', 'ITALY', 'LATVIA', 'LITHUANIA', 'LUXEMBOURG', 'MALTA', 'NETHERLANDS', 'POLAND', 'PORTUGAL', 'ROMANIA', 'SLOVAKIA', 'SLOVENIA', 'SPAIN', 'SWEDEN');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'SELLER');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('alimentacion', 'automitriz', 'calzado', 'casa, jardin y oficina', 'construccion e industria', 'deporte y aficion', 'electrodomesticos grandes', 'electrodomesticos pequeños', 'electronica', 'liquidacion de empresas', 'muebes', 'para niños', 'relojes y joyeria', 'ropa', 'salud y belleza', 'telefonos');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "mobile" TEXT,
    "country" "Country" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "minOrder" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "country" "Country" NOT NULL,
    "brand" TEXT,
    "shippingOptions" "ShippingOptions"[],
    "shippingCountries" "Country"[],
    "images" TEXT[],
    "sellerId" UUID NOT NULL,
    "category" "Category" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
