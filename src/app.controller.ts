import { Controller, Get, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Trello } from './services/trello.service';
@Controller()
export class AppController {
  trello: Trello;
  constructor(private readonly appService: AppService) {
    this.trello = new Trello()
  }

  @Post("/fetchProjectDetails")
  fetchProjectDetails(@Request() req) {
    try {
      this.trello.fetchProjectDetails(req)
    }catch(err) {
      console.log("err", err)
    }
  }
}
