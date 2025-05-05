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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const roles_guard_1 = require("./roles.guard"); // ajusta la ruta si es diferente
const roles_decorator_1 = require("./roles.decorator"); // ajusta la ruta si es diferente
const admin_service_1 = require("./admin.service");
const client_1 = require("@prisma/client");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    // 1. Ver todos los usuarios
    findAllUsers() {
        return this.adminService.findAllUsers();
    }
    // 2. Eliminar usuario por ID
    deleteUser(id) {
        return this.adminService.deleteUser(id);
    }
    // 3. Modificar publicaciones
    updateProduct(id, data) {
        return this.adminService.updateProduct(id, data);
    }
    // 4. Modificar datos del perfil del usuario
    updateUser(id, data) {
        return this.adminService.updateUser(id, data);
    }
    // 5. Cambiar rol de usuario
    changeUserRole(id, role) {
        return this.adminService.changeUserRole(id, role);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('users'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Delete)('users/:id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Patch)('products/:id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Patch)('users/:id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Patch)('users/:id/role'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "changeUserRole", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
