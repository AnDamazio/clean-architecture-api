import { User } from '../entities';
import { IUserRepository } from './user-repository-abstract';

export abstract class IDataServices {
  abstract user: IUserRepository<User>;
}
