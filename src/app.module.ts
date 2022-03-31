import { PersonalDataServicesModule } from './services/use-cases/personal-data/personal-data-services.module';
import { Module } from '@nestjs/common';
import { AppController, UserController } from './controllers/';
import { DataServicesModule } from './services/data-services/data-services.module';
import { UserServicesModule } from './services/use-cases/user/user-services.module';
import { AppService } from './app.service';
import("dotenv/config");

@Module({
  imports: [DataServicesModule, UserServicesModule, PersonalDataServicesModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
