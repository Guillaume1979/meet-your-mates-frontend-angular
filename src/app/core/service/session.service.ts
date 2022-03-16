import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../model/session';
import { root } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private readonly http: HttpClient) {}

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${root}/sessions`);
  }
}
