import {v4 as uuidv4} from 'uuid';

export class Players {
    name:string;
    id: string;
    constructor (name) {
        this.name = name
        this.id = uuidv4()
    }

    public getID() {
        return this.id
    }

    public getName() {
        return this.name
    }
}
