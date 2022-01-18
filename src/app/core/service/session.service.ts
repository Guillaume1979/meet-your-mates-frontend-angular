import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../model/session';
import { endpoint } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private readonly http: HttpClient) {}

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${endpoint}/sessions`);
  }
}
