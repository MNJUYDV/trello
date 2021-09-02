import { User } from "./user";
import { Project } from "./project";
export class Team {
    name: string;
    members: User[];
    projects: Project[];

    constructor(name, users) {
        this.name = name
        this.members = users
    }

    public getName() {
        return this.name;
    }
}