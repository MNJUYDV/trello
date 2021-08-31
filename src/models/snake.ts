export class Snake {
    start: number;
    end: number;

    constructor(start, end) {
        this.start = start;
        this.end = end
    }

    public getStart(){
        return this.start;
    }

    public getEnd() {
        return this.end;
    }
}