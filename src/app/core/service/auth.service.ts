import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint = 'http://localhost:3000/api/auth/login';

  constructor(private readonly http: HttpClient) {}

  login(): Observable<{ access_token: unknown }> {
    return this.http.get<{ access_token: unknown }>(
      `${this.endpoint}` /*, {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin': [
          'http://localhost:4200',
          'http://localhost:3000',
          // 'https://discord.com/api/oauth2/authorize',
        ],
        // 'Content-Type': ['application/json, text/plain, *!/!*'],
      }),
    }*/
    );
  }
}
