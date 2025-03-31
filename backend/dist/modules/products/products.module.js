"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service"); // Asegúrate de que PrismaService esté en la carpeta correcta
const create_product_service_1 = require("./services/create-product.service"); // Asegúrate de que CreateProductService esté en la carpeta correcta
const products_repository_1 = require("./products.repository"); // Asegúrate de importar el repositorio
const products_controller_1 = require("./products.controller"); // Asegúrate de que ProductsController esté en la carpeta correcta
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            prisma_service_1.PrismaService, // PrismaService para acceso a base de datos
            products_repository_1.ProductRepository, // ProductRepository para manejar las operaciones de productos
            create_product_service_1.CreateProductService, // Servicio que gestiona la lógica de negocio
        ],
        controllers: [products_controller_1.ProductsController], // Controlador para gestionar las rutas
    })
], ProductsModule);
