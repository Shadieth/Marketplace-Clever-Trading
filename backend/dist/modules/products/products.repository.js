"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service"); // Asegúrate de que PrismaService esté correctamente configurado
let ProductRepository = class ProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // Crear un nuevo producto
    createProduct(createProductDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdProduct = yield this.prisma.product.create({
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
        });
    }
    // Método creado por YOEL
    // Agrega el método findAll() para obtener todos los productos
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.prisma.product.findMany();
            // Mapea cada producto para ajustarlo a la interfaz Product
            return products.map((createdProduct) => ({
                id: createdProduct.id,
                title: createdProduct.title,
                description: createdProduct.description,
                price: createdProduct.price,
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
            }));
        });
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductRepository);
