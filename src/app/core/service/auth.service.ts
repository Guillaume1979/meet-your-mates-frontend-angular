import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import jwt_decode from 'jwt-decode';
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
  private activeUser = new BehaviorSubject<Player>(new Player());
  activeUser$ = this.activeUser as Observable<Player>;

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated as Observable<boolean>;

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

  logout(): void {
    this.oauthService.logOut();
    sessionStorage.removeItem('mym_token');
    this.changeAuthenticationState();
  }

  getRawToken(): string {
    return sessionStorage.getItem('mym_token') ?? '';
  }

  private setJwtToken(): void {
    this.getJwtTokenFromBack().subscribe((jwtToken) => {
      sessionStorage.setItem('mym_token', jwtToken.mym_token ?? '');
      this.getUserInfoFromToken();
      this.changeAuthenticationState();
    });
  }

  private getJwtTokenFromBack(): Observable<JwtToken> {
    return this.http.post<JwtToken>(`${this.endpoint}`, {
      access_token: `${sessionStorage.getItem('access_token')}`,
    });
  }

  private changeAuthenticationState(): void {
    this.isAuthenticated.next(!!sessionStorage.getItem('mym_token'));
    // todo : à supprimer
    console.log(!!sessionStorage.getItem('mym_token'));
  }

  private getUserInfoFromToken(): void {
    if (this.isAuthenticated) {
      const decodedToken: Partial<Player> = jwt_decode(this.getRawToken());
      console.log(decodedToken);
      this.activeUser.next(
        new Player({
          id: decodedToken.id,
          username: decodedToken.username,
          avatar: decodedToken.avatar,
          role: decodedToken.role,
          discordId: decodedToken.discordId,
        })
      );
    } else {
      throw new Error('Joueur non identifié');
    }
  }
}
