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
exports.PersonalDataServices = void 0;
const common_1 = require("@nestjs/common");
const abstracts_1 = require("../../../core/abstracts");
const personal_data_factory_service_1 = require("./personal-data-factory.service");
let PersonalDataServices = class PersonalDataServices {
    constructor(dataServices, personalDataFactoryService) {
        this.dataServices = dataServices;
        this.personalDataFactoryService = personalDataFactoryService;
    }
    createPersonalData(createPersonalDataDto) {
        const personalData = this.personalDataFactoryService.createNewPersonalData(createPersonalDataDto);
        return this.dataServices.personalData.create(personalData);
    }
};
PersonalDataServices = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [abstracts_1.IDataServices,
        personal_data_factory_service_1.PersonalDataFactoryService])
], PersonalDataServices);
exports.PersonalDataServices = PersonalDataServices;
//# sourceMappingURL=personal-data-services.service.js.map