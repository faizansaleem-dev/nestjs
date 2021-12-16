import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/practice'), RolesModule, UsersModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
