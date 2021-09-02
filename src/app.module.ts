import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Trello } from './services/trello.service';

@Module({
  imports: [Trello],
  controllers: [AppController],
  providers: [AppService, Trello],
})
export class AppModule {}
