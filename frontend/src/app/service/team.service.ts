import { Injectable } from '@angular/core';
import { BlogPostItem } from '../blog/BlogPostItem';
import { Team } from '../teams/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teams: Team[] = [];
  private assignedUsers: Set<string> = new Set<string>();

  createTeam(users: BlogPostItem[]): Team {
    const uniqueDomains = new Set<string>();
    const team: Team = { id: this.teams.length + 1, name: 'Team ' + (this.teams.length + 1), users: [] };

    users.forEach((user:any) => {
      if (!this.assignedUsers.has(user.id) && !uniqueDomains.has(user.domain)) {
        uniqueDomains.add(user.domain);
        team.users.push(user);
        this.assignedUsers.add(user.id);
      }
    });

    this.teams.push(team);
    return team;
  }

  getTeams(): Team[] {
    return this.teams;
  }
}

