import { PersonalDataServices } from './../services/use-cases/personal-data/personal-data-services.service';
import { PersonalDataFactoryService } from './../services/use-cases/personal-data/personal-data-factory.service';
import { PersonalData } from './../core/entities/personal-data.entity';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto, CreateUserResponseDto } from '../core/dtos';
import { UserServices, UserFactoryService } from '../services/use-cases/user';

@Controller('api/user')
export class UserController {
  constructor(
    private userServices: UserServices,
    private userFactoryService: UserFactoryService,
    private personalDataServices: PersonalDataServices,
    private personalDataFactoryService: PersonalDataFactoryService
    ) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    const createUserResponse = new CreateUserResponseDto();
    console.log(userDto)
    try {

      const personalData = this.personalDataFactoryService.createNewPersonalData(userDto.personalData);
      const createdPersonalData = await this.personalDataServices.createPersonalData(personalData)
      userDto.personalData = createdPersonalData
      const user = this.userFactoryService.createNewUser(userDto)
      const createdUser = await this.userServices.createUser(user)
    
      createUserResponse.success = true;
      createUserResponse.createdUser = createdUser;
    } catch (error) {
      // report and log error
      console.log(error)
      
      createUserResponse.success = false;
    }

    return createUserResponse;
  }
}
