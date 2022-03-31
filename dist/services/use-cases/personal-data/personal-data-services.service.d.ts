import { PersonalData } from '../../../core/entities';
import { IDataServices } from '../../../core/abstracts';
import { CreatePersonalDataDto } from '../../../core/dtos';
import { PersonalDataFactoryService } from './personal-data-factory.service';
export declare class PersonalDataServices {
    private dataServices;
    private personalDataFactoryService;
    constructor(dataServices: IDataServices, personalDataFactoryService: PersonalDataFactoryService);
    createPersonalData(createPersonalDataDto: CreatePersonalDataDto): Promise<PersonalData>;
}
