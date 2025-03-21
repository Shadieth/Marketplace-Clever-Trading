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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service"); // Asumiendo que tienes un PrismaService configurado
let UserRepository = class UserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    // Crear un nuevo usuario
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.create({
                data: {
                    name: data.name,
                    email: data.email,
                },
            });
        });
    }
    // Obtener todos los usuarios
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findMany();
        });
    }
    // Obtener un usuario por id
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findUnique({
                where: { id },
            });
        });
    }
    // Actualizar un usuario
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.update({
                where: { id },
                data,
            });
        });
    }
    // Eliminar un usuario
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.delete({
                where: { id },
            });
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepository);
