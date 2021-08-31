import { Module } from '@nestjs/common';
import { SnakeAndLadderBoard } from 'src/models/snake_and_ladder_board';
import { SnakeAndLadderService } from './snake_and_ladder.service';
import { DiceService } from './dice.service';
@Module({
  exports: [SnakeAndLadderBoard, SnakeAndLadderService, DiceService],
  controllers: [],
  providers: [SnakeAndLadderBoard, SnakeAndLadderService, DiceService],
})
export class GameModule {}
