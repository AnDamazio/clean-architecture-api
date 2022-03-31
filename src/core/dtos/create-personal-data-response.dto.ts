import { PersonalData } from '../entities';

export class CreatePersonalDataResponseDto {
  success: boolean;

  createdUser: PersonalData;
}
