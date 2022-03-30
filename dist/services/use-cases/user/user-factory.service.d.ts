import { User } from '../../../core/entities';
import { CreateUserDto } from '../../../core/dtos';
export declare class UserFactoryService {
    createNewUser(createUserDto: CreateUserDto): User;
}
