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
exports.MysqlDataServices = void 0;
const mysql_personal_data_repository_1 = require("./mysql-personal-data-repository");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const model_1 = require("./model");
const common_1 = require("@nestjs/common");
const mysql_user_repository_1 = require("./mysql-user-repository");
let MysqlDataServices = class MysqlDataServices {
    constructor(UserRepository, PersonalDataRepository) {
        this.UserRepository = UserRepository;
        this.PersonalDataRepository = PersonalDataRepository;
    }
    onApplicationBootstrap() {
        this.user = new mysql_user_repository_1.MysqlUserRepository(this.UserRepository);
        this.personalData = new mysql_personal_data_repository_1.MysqlPersonalDataRepository(this.PersonalDataRepository);
    }
};
MysqlDataServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(model_1.User)),
    __param(1, (0, typeorm_2.InjectRepository)(model_1.PersonalData)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], MysqlDataServices);
exports.MysqlDataServices = MysqlDataServices;
//# sourceMappingURL=mysql-data-services.service.js.map