import { Injectable } from '@nestjs/common';
import { PersonalData } from '../../../core/entities';
import { CreatePersonalDataDto } from '../../../core/dtos';

@Injectable()
export class PersonalDataFactoryService {
  createNewPersonalData(createPersonalDataDto: CreatePersonalDataDto) {
    const newPersonalData = new PersonalData();
    newPersonalData.email = createPersonalDataDto.email;
    newPersonalData.password = createPersonalDataDto.password;

    return newPersonalData;
  }
}
