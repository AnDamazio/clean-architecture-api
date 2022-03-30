"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlUserRepository = void 0;
class MysqlUserRepository {
    constructor(repository) {
        this._repository = repository;
    }
    getAll() {
        return this._repository.find();
    }
    get() {
        return this._repository.findOne();
    }
    create(user) {
        return this._repository.save(user);
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
//# sourceMappingURL=mysql-user-repository.js.map