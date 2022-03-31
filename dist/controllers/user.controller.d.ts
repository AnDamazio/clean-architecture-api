import { PersonalDataServices } from './../services/use-cases/personal-data/personal-data-services.service';
import { PersonalDataFactoryService } from './../services/use-cases/personal-data/personal-data-factory.service';
import { CreateUserDto, CreateUserResponseDto } from '../core/dtos';
import { UserServices, UserFactoryService } from '../services/use-cases/user';
export declare class UserController {
    private userServices;
    private userFactoryService;
    private personalDataServices;
    private personalDataFactoryService;
    constructor(userServices: UserServices, userFactoryService: UserFactoryService, personalDataServices: PersonalDataServices, personalDataFactoryService: PersonalDataFactoryService);
    createUser(userDto: CreateUserDto): Promise<CreateUserResponseDto>;
}
