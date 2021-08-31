import { SnakeAndLadderBoard } from "src/models/snake_and_ladder_board";
import { Players } from "src/models/players";
import { DiceService } from "./dice.service";
export class SnakeAndLadderService {
    private  snakeAndLadderBoard: SnakeAndLadderBoard;
    private  diceService: DiceService;
    numberOfPlayers: number;
    players: Players[]
    isGameCompleted: boolean;
    static BOARD_SIZE = 100;
    constructor() {
        this.snakeAndLadderBoard = new SnakeAndLadderBoard(SnakeAndLadderService.BOARD_SIZE);
        this.players = new Array();
        this.isGameCompleted = false;
        this.diceService = new DiceService()
    }

    findNextPosition(new_position) {
        let previousPosition;
        do {
            previousPosition = new_position
            for(let snake of this.snakeAndLadderBoard.snakes) {
                if(snake.getStart() ==  new_position) {
                    new_position = snake.getEnd()
                }
            }
            for(let ladder of this.snakeAndLadderBoard.ladders) {
                if(ladder.getStart() ==  new_position) {
                    new_position = ladder.getEnd()
                }
            }
        }while(previousPosition != new_position)
        return new_position
    }

    movePlayer(player, dice_rolled) {
        let old_position = this.snakeAndLadderBoard.getplayerPieces()[player.getID()]
        let new_position = old_position + dice_rolled
        if(new_position > SnakeAndLadderService.BOARD_SIZE) {
            new_position = old_position
        }
        else {
            let next_position = this.findNextPosition(new_position)
            console.log("Next position is ",next_position)
            delete this.snakeAndLadderBoard.getplayerPieces()[player.getID()]
            this.snakeAndLadderBoard.getplayerPieces()[player.getID()] = next_position
        }
    }

    hasPlayerWon(player) {
        if(this.snakeAndLadderBoard.getplayerPieces()[player.getID()] == SnakeAndLadderService.BOARD_SIZE) {
            console.log("Has won", player.getID())
            this.isGameCompleted = true;
        }
    }

    public setSnakes(snakes) {
        this.snakeAndLadderBoard.setSnakes(snakes)
    }

    public getSnakes() {
        return this.snakeAndLadderBoard.getSnakes()
    }

    public setLadders(ladders) {
        this.snakeAndLadderBoard.setLadders(ladders)
    }

    public setPlayers(players) {
        this.players = players
    }

    public setPlayerPieces(players) {
        let playerPieces = {}
        for(let player of players) {
            playerPieces[player.getID()] = 0
        }
        this.snakeAndLadderBoard.setplayerPieces(playerPieces)
    }

    public startGame() {
        while(!this.isGameCompleted) {
            let player = this.players.shift();
            let playerPieces = this.snakeAndLadderBoard.getplayerPieces()[player.getID()]
            let dice_rolled = this.diceService.roll()
            console.log("Player ", player.getID(), " rolled dice ", dice_rolled, "previous position ", playerPieces)
            this.movePlayer(player, dice_rolled)
            playerPieces = this.snakeAndLadderBoard.getplayerPieces()[player.getID()]
            console.log("New position is ", playerPieces)
            console.log("======================================")
            this.hasPlayerWon(player)
            this.players.push(player)
        }
        console.log("Game Ended!!")
    }
}