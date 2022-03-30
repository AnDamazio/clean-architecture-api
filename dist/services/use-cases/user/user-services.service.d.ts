import { User } from '../../../core/entities';
import { IDataServices } from '../../../core/abstracts';
import { CreateUserDto } from '../../../core/dtos';
import { UserFactoryService } from './user-factory.service';
export declare class UserServices {
    private dataServices;
    private userFactoryService;
    constructor(dataServices: IDataServices, userFactoryService: UserFactoryService);
    getAllUsers(): Promise<User[]>;
    getUserById(id: any): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
