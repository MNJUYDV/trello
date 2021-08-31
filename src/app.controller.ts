import { Controller, Get, Request, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Ladder } from './models/ladder';
import { Players } from './models/players';
import { Snake } from './models/snake';
import { SnakeAndLadderService } from './services/snake_and_ladder.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly snakeAndLadderService: SnakeAndLadderService) {}

  @Post('/startGame')
    startGame(@Request() req) {
      console.log("request is ", req.body)
      let body = req.body
      let req_snakes = body["snakes"]
      let req_ladders = body["ladders"]
      let req_players = body["players"]
      let snakes = []
      for(let snake of req_snakes) {
        let obj = new Snake(snake.start, snake.end)
        snakes.push(obj)
      }
      let ladders = []
      for(let ladder of req_ladders) {
        let obj = new Ladder(ladder.start, ladder.end)
        ladders.push(obj)
      }
      let players = []
      for(let name of req_players) {
        let obj = new Players(name)
        players.push(obj)
      }
      this.snakeAndLadderService.setSnakes(snakes)
      this.snakeAndLadderService.setLadders(ladders)
      this.snakeAndLadderService.setPlayers(players)
      this.snakeAndLadderService.setPlayerPieces(players)
      this.snakeAndLadderService.startGame()
  }
}
