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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("../core/dtos");
const user_1 = require("../services/use-cases/user");
let UserController = class UserController {
    constructor(userServices, userFactoryService) {
        this.userServices = userServices;
        this.userFactoryService = userFactoryService;
    }
    async createUser(userDto) {
        const createUserResponse = new dtos_1.CreateUserResponseDto();
        try {
            const user = this.userFactoryService.createNewUser(userDto);
            const createdUser = await this.userServices.createUser(user);
            createUserResponse.success = true;
            createUserResponse.createdUser = createdUser;
        }
        catch (error) {
            createUserResponse.success = false;
        }
        return createUserResponse;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, common_1.Controller)('api/user'),
    __metadata("design:paramtypes", [user_1.UserServices,
        user_1.UserFactoryService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map