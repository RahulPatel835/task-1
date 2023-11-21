import { Component } from '@angular/core';
import { TeamService } from '../service/team.service';
import { BlogService } from '../service/blog.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teams :any= [];

  constructor(private teamService: TeamService,private bg :BlogService) {}

  createTeam() {
    
    const users :any= this.bg.blogposts_;
    console.log(users)
    const team = this.teamService.createTeam(users);
    this.teams.push(team);
  }
}
