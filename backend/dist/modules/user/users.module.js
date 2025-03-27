"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_repository_1 = require("./users.repository");
const prisma_service_1 = require("../../prisma/prisma.service");
const create_user_service_1 = require("./services/create-user.service");
const get_all_users_services_1 = require("./services/get-all-users.services");
const login_service_1 = require("./services/login.service");
const prisma_module_1 = require("../../prisma/prisma.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [users_controller_1.UserController],
        providers: [
            get_all_users_services_1.GetAllUsersService,
            create_user_service_1.CreateUserService,
            login_service_1.LoginService,
            users_repository_1.UserRepository,
            prisma_service_1.PrismaService
        ],
    })
], UserModule);
