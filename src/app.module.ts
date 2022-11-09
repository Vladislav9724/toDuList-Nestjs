import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TasksModule} from "./tasks/tasks.module";


@Module({
  imports: [
      TasksModule,
      MongooseModule.forRoot(`mongodb+srv://user:user@cluster0.8fggakd.mongodb.net/?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
