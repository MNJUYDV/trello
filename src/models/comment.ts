import { User } from "./user";
import {v4 as uuidv4} from 'uuid'
export class Comment {
    id: string;
    comment: string;
    posted_by: User;
    
    constructor(comment, posted_by) {
        this.comment = comment
        this.posted_by = posted_by
        this.id = uuidv4()
    }

    public getComment() {
        return this.comment
    }

    public setComment(comment) {
        this.comment = comment
    }

    public getID() {
        return this.id
    }

    public getPostedBy() {
        return this.posted_by
    }

    public setPostedBy(posted_by) {
        this.posted_by = posted_by
    }
}