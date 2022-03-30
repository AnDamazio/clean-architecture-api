import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto, CreateUserResponseDto } from '../core/dtos';
import { UserServices, UserFactoryService } from '../services/use-cases/user';

@Controller('api/user')
export class UserController {
  constructor(
    private userServices: UserServices,
    private userFactoryService: UserFactoryService,
  ) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    const createUserResponse = new CreateUserResponseDto();
    try {
      const user = this.userFactoryService.createNewUser(userDto);
      const createdUser = await this.userServices.createUser(user);

      createUserResponse.success = true;
      createUserResponse.createdUser = createdUser;
    } catch (error) {
      // report and log error
      createUserResponse.success = false;
    }

    return createUserResponse;
  }
}
