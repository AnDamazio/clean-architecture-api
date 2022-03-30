import { CreateUserDto, CreateUserResponseDto } from '../core/dtos';
import { UserServices, UserFactoryService } from '../services/use-cases/user';
export declare class UserController {
    private userServices;
    private userFactoryService;
    constructor(userServices: UserServices, userFactoryService: UserFactoryService);
    createUser(userDto: CreateUserDto): Promise<CreateUserResponseDto>;
}
