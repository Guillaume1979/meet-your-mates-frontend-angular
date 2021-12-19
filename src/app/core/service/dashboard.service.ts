import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../model/player';
import { Guild } from '../model/guild';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  endpoint = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(
      `http://localhost:3000/api/players/search/withdeleted`
    );
  }

  getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.endpoint}/players/${playerId}`);
  }

  getGuild(guildId: number): Observable<Guild> {
    return this.http.get<Guild>(`${this.endpoint}/guilds/${guildId}`);
  }
}
