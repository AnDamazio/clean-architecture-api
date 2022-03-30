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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../core/abstracts");
const user_factory_service_1 = require("./user-factory.service");
let UserServices = class UserServices {
    constructor(dataServices, userFactoryService) {
        this.dataServices = dataServices;
        this.userFactoryService = userFactoryService;
    }
    getAllUsers() {
        return this.dataServices.user.getAll();
    }
    getUserById(id) {
        return this.dataServices.user.get(id);
    }
    createUser(createUserDto) {
        const user = this.userFactoryService.createNewUser(createUserDto);
        return this.dataServices.user.create(user);
    }
};
UserServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        user_factory_service_1.UserFactoryService])
], UserServices);
exports.UserServices = UserServices;
//# sourceMappingURL=user-services.service.js.map