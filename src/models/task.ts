import { User } from "./user";
import { Comment } from "./comment";

export class Task {
    name: string;
    description: string;
    assigned_to: User;
    report_to: User;
    comments: Comment[];
    sub_tasks: Task[];
    images: string[]
}