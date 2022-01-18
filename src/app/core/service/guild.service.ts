import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guild } from '../model/guild';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GuildService {
  constructor(private readonly http: HttpClient) {}

  getGuild(guildId: number): Observable<Guild> {
    return this.http.get<Guild>(`${endpoint}/guilds/${guildId}`);
  }
}
