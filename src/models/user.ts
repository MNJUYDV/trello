import { Team } from "./team";
import {v4 as uuidv4} from 'uuid'
export class User {
    name: string;
    email: string;
    id: string;
    team: Team;

    constructor(name, email) {
        this.name = name
        this.email = email
        this.team = null
        this.id = uuidv4();
    }
}