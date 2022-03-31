import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreatePersonalDataDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
