import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./model/user.model";
import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { IDataServices } from "src/core";
import { MysqlUserRepository } from "./mysql-user-repository";

@Injectable()
export class MysqlDataServices
  implements IDataServices, OnApplicationBootstrap
{
  user: MysqlUserRepository<User>;
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>
  ) {}

  onApplicationBootstrap() {
    this.user = new MysqlUserRepository<User>(this.UserRepository);
  }
}
