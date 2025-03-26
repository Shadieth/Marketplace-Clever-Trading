"use strict";
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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
require("dotenv/config");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
        const host = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : 'localhost';
        // Habilitar el cierre limpio de Prisma
        const prismaService = app.get(prisma_service_1.PrismaService);
        yield prismaService.enableShutdownHooks(app);
        // Habilitar CORS para que Angular pueda comunicarse con el backend
        app.enableCors({
            origin: 'http://localhost:4200',
            credentials: true
        });
        // Habilitar las validaciones globalmente
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }));
        yield app.listen(port, host);
        console.log(`🚀 Servidor corriendo en cd http://${host}:${port}`);
    });
}
bootstrap();
