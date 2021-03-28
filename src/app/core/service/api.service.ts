import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private readonly http: HttpClient) { }


  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`http://localhost:3000/api/players/search/withdeleted`);
  }
}
