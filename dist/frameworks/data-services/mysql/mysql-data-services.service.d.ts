import { Repository } from "typeorm";
import { User } from "./model/user.model";
import { OnApplicationBootstrap } from "@nestjs/common";
import { IDataServices } from "src/core";
import { MysqlUserRepository } from "./mysql-user-repository";
export declare class MysqlDataServices implements IDataServices, OnApplicationBootstrap {
    private UserRepository;
    user: MysqlUserRepository<User>;
    constructor(UserRepository: Repository<User>);
    onApplicationBootstrap(): void;
}
