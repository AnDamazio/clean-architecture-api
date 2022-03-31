import { PersonalData } from '../../../core/entities';
import { CreatePersonalDataDto } from '../../../core/dtos';
export declare class PersonalDataFactoryService {
    createNewPersonalData(createPersonalDataDto: CreatePersonalDataDto): PersonalData;
}
