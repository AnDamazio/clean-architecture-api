import { Repository } from "typeorm";
import { IUserRepository } from "src/core";
export declare class MysqlUserRepository<T> implements IUserRepository<T> {
    private _repository;
    constructor(repository: Repository<T>);
    getAll(): Promise<T[]>;
    get(): Promise<T>;
    create(user: any): Promise<T>;
}
