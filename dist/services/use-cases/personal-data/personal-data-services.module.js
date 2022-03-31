"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalDataServicesModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../data-services/data-services.module");
const personal_data_factory_service_1 = require("./personal-data-factory.service");
const personal_data_services_service_1 = require("./personal-data-services.service");
let PersonalDataServicesModule = class PersonalDataServicesModule {
};
PersonalDataServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule],
        providers: [personal_data_factory_service_1.PersonalDataFactoryService, personal_data_services_service_1.PersonalDataServices],
        exports: [personal_data_factory_service_1.PersonalDataFactoryService, personal_data_services_service_1.PersonalDataServices],
    })
], PersonalDataServicesModule);
exports.PersonalDataServicesModule = PersonalDataServicesModule;
//# sourceMappingURL=personal-data-services.module.js.map