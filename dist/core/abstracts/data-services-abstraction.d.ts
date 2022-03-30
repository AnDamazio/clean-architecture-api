import { User } from '../entities';
import { IUserRepository } from './user-repository-abstract';
export declare abstract class IDataServices {
    abstract user: IUserRepository<User>;
}
