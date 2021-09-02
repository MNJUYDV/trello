import { User } from "./user";
import { Task } from "./task";
export class Project {
    sub_projects: Project[];
    title: string;
    description: string;
    comments: Comment[];
    assigned_to: User;
    report_to: User;
    tasks: Task[];
    images: string[]
    parent_project: Project;


    constructor(project) {
        this.title = project.title;
        this.description = project.description;
        this.assigned_to = project.assigned_to_user
        this.report_to = project.report_to_user
        this.comments = new Array()
        this.images = project.images
        this.sub_projects = new Array()
        this.parent_project = null
    }

    public getSubProjects() {
        return this.sub_projects
    }

    public setSubProjects(sub_projects) {
        for(let project of sub_projects) {
            this.sub_projects.push(new Project(project))
        }
    }

    public setComments(comment) {
        this.comments.push(comment)
    }

    public getTitle() {
        return this.title
    }

    public setTitle(title) {
        this.title = title
    }
    
}