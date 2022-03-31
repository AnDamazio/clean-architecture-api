"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlPersonalDataRepository = void 0;
class MysqlPersonalDataRepository {
    constructor(repository) {
        this._repository = repository;
    }
    create(personalData) {
        return this._repository.save(personalData);
    }
}
exports.MysqlPersonalDataRepository = MysqlPersonalDataRepository;
//# sourceMappingURL=mysql-personal-data-repository.js.map