import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Player } from '../model/player';

export const authCodeFlowConfig: AuthConfig = {
  // issuer: 'https://discord.com',
  loginUrl: `https://discord.com/oauth2/authorize`,
  redirectUri: window.location.origin + '/index.html',
  clientId: '737369368396300358',
  responseType: 'token',
  scope: 'identify email guilds',
  showDebugInformation: true,
  oidc: false,
  strictDiscoveryDocumentValidation: false,
};

interface JwtToken {
  mym_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint = 'http://localhost:3000/api/auth/login';

  constructor(
    private readonly http: HttpClient,
    private readonly oauthService: OAuthService
  ) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tryLogin().then((r) => {
      this.setJwtToken();
    });
  }

  login(): void {
    this.oauthService.initLoginFlow();
  }

  setJwtToken(): void {
    const token = this.getJwtTokenFromBack().subscribe((jwtToken) => {
      window.sessionStorage.setItem('mym_token', jwtToken.mym_token ?? '');
    });
  }

  getJwtTokenFromBack(): Observable<JwtToken> {
    return this.http.post<JwtToken>(`${this.endpoint}`, {
      access_token: `${window.sessionStorage.getItem('access_token')}`,
    });
  }

  logout(): void {
    this.oauthService.logOut();
  }
}
