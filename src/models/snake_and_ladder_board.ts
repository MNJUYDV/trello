import { Snake } from '../models/snake';
import { Ladder } from '../models/ladder';

export class SnakeAndLadderBoard {
    size: number;
    snakes: Snake[];
    ladders: Ladder[];
    playerPieces: { [key:string]:number;};

    constructor(size) {
        this.size = size;
        this.snakes = new Array();
        this.ladders = new Array();
    }

    public getSize() {
        return this.size;
    }

    public getSnakes() {
        return this.snakes;
    }

    public setSnakes(snakes) {
        this.snakes = snakes;
    }

    public getLadders() {
        return this.ladders;
    }

    public setLadders(ladders) {
        this.ladders = ladders;
    }

    public getplayerPieces() {
        return this.playerPieces
    }

    public setplayerPieces(playerPieces) {
        this.playerPieces = playerPieces
    }
}
