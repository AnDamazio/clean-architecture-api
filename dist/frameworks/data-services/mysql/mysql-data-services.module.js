"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDataServicesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("../../../core");
const model_1 = require("./model");
const mysql_data_services_service_1 = require("./mysql-data-services.service");
Promise.resolve().then(() => require("dotenv/config"));
let MysqlDataServicesModule = class MysqlDataServicesModule {
};
MysqlDataServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([model_1.User, model_1.PersonalData]),
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "",
                database: "clean_teste",
                entities: [__dirname + "/../**/*.model{.ts,.js}"],
                synchronize: true,
            }),
        ],
        providers: [
            {
                provide: core_1.IDataServices,
                useClass: mysql_data_services_service_1.MysqlDataServices,
            },
        ],
        exports: [core_1.IDataServices],
    })
], MysqlDataServicesModule);
exports.MysqlDataServicesModule = MysqlDataServicesModule;
//# sourceMappingURL=mysql-data-services.module.js.map