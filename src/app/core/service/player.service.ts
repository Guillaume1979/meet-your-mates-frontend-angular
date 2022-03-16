import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../model/player';
import { root } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private readonly http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(
      `http://localhost:3000/api/players/search/withdeleted`
    );
  }

  getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${root}/players/${playerId}`);
  }
}
