"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const personal_data_services_module_1 = require("./services/use-cases/personal-data/personal-data-services.module");
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers/");
const data_services_module_1 = require("./services/data-services/data-services.module");
const user_services_module_1 = require("./services/use-cases/user/user-services.module");
const app_service_1 = require("./app.service");
Promise.resolve().then(() => require("dotenv/config"));
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule, user_services_module_1.UserServicesModule, personal_data_services_module_1.PersonalDataServicesModule],
        controllers: [controllers_1.AppController, controllers_1.UserController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map