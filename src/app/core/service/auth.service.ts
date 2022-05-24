import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import jwt_decode from 'jwt-decode';
import { Player } from '../model/player';
import { Router } from '@angular/router';
import { root } from '../../../environments/environment';

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
  endpoint = `${root}/auth/login`;
  private activeUser = new BehaviorSubject<Player>(new Player());
  activeUser$ = this.activeUser.asObservable();

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly oauthService: OAuthService,
    private readonly router: Router
  ) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tryLogin().then((r) => {
      this.setJwtToken();
      /*const { value } = this.isAuthenticated;
      if (!value) {
        this.setJwtToken();
      }*/
    });
    if (sessionStorage.getItem('mym_token')) {
      this.isAuthenticated.next(true);
      this.getUserInfoFromToken();
    }
  }

  login(): void {
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.logOut();
    sessionStorage.removeItem('mym_token');
    this.updateAuthenticationState();
    this.router.navigate(['']);
  }

  getRawToken(): string {
    return sessionStorage.getItem('mym_token') ?? '';
  }

  private setJwtToken(): void {
    this.getJwtTokenFromBack().subscribe((jwtToken) => {
      sessionStorage.setItem('mym_token', jwtToken.mym_token ?? '');
      this.getUserInfoFromToken();
      this.updateAuthenticationState();
      // this.router.navigate(['dashboard']); // todo à supprimer si trouvé une solution pour la redirection vers le dashboard après l'authentification
    });
  }

  private getJwtTokenFromBack(): Observable<JwtToken> {
    return this.http.post<JwtToken>(`${this.endpoint}`, {
      access_token: `${sessionStorage.getItem('access_token')}`,
    });
  }

  private updateAuthenticationState(): void {
    this.isAuthenticated.next(sessionStorage.getItem('mym_token') !== null);
  }

  private getUserInfoFromToken(): void {
    if (this.isAuthenticated) {
      const decodedToken: Partial<Player> = jwt_decode(this.getRawToken());
      console.log('decoded Token : ', decodedToken);
      const roles: string[] = decodedToken.roles ?? [];
      this.activeUser.next({
        id: decodedToken.id,
        username: decodedToken.username,
        avatar: decodedToken.avatar,
        roles: roles,
        discordId: decodedToken.discordId,
      } as Player);
    } else {
      throw new Error('Joueur non identifié');
    }
  }
}
