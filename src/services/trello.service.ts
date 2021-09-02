import { Project } from "src/models/project";
import { Team } from "src/models/team";
import { User } from "src/models/user";
import {Comment} from "src/models/comment";
import { validate } from "uuid";
export class Trello {
    projects: Project[];
    teams: Team[];
    users: User[];

    constructor() {
        this.projects = new Array();
        this.teams = new Array();
        this.users = new Array();
    }

    findTeamByName(team_name) {
        for(let team of this.teams) {
            if(team.getName() == team_name)
                return team
        }
    }

    createProjects(projects) {
        for(let project of projects) {
            let assigned_to_user = this.findUserByEmail(project.assigned_to)
            let report_to_user = this.findUserByEmail(project.report_to)
            let details = {
                "title": project.title,
                "description": project.description,
                "assigned_to_user": assigned_to_user,
                "report_to_user": report_to_user,
                "images": project.images,
                "comments": project.comments
            }
            let new_project = new Project(details)
            new_project.setSubProjects(project.sub_projects)
            for(let comment of project.comments) {
                let posted_by_user = this.findUserByEmail(comment.posted_by);
                new_project.setComments(new Comment(comment.comment, posted_by_user))
            }
            this.projects.push(new_project)
        }
    }

    createUsers(users) {
        for(let user of users) {
            this.users.push(new User(user.name, user.email))
        }
    }

    findUserByEmail(email) {
        let user = null
        for(let user of this.users) {
            if(user.email == email)
                break
        }
        return user
    }

    createTeams(teams) {
        for(let team of teams) {
            let members = []
            for(let email of team.users) {
                members.push(this.findUserByEmail(email))
            }
            this.teams.push(new Team(team.name, members))
        }
    }

    validate(body) {
        return true
    }

    public fetchProjectDetails(req) {
        let body = req.body
        if(this.validate(body)){
            this.createUsers(req.body.users)
            this.createTeams(req.body.teams)
            this.createProjects(req.body.projects)
        }
        else {
            console.log("Error Validating the request")
        }
    }
}