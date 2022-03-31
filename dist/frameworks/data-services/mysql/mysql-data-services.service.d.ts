import { MysqlPersonalDataRepository } from './mysql-personal-data-repository';
import { Repository } from "typeorm";
import { User, PersonalData } from "./model";
import { OnApplicationBootstrap } from "@nestjs/common";
import { IDataServices } from "src/core";
import { MysqlUserRepository } from "./mysql-user-repository";
export declare class MysqlDataServices implements IDataServices, OnApplicationBootstrap {
    private UserRepository;
    private PersonalDataRepository;
    user: MysqlUserRepository<User>;
    personalData: MysqlPersonalDataRepository<PersonalData>;
    constructor(UserRepository: Repository<User>, PersonalDataRepository: Repository<PersonalData>);
    onApplicationBootstrap(): void;
}
