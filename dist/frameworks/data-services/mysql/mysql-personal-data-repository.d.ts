import { Repository } from "typeorm";
import { IPersonalDataRepository } from "src/core";
export declare class MysqlPersonalDataRepository<T> implements IPersonalDataRepository<T> {
    private _repository;
    constructor(repository: Repository<T>);
    create(personalData: any): Promise<T>;
}
