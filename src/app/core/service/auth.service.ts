import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

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
      console.log('token = ', window.sessionStorage.getItem('access_token'));

      // user infos
      const userInfo = this.http.get('https://discord.com/api/v8/users/@me', {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem(
            'access_token'
          )}`,
        },
      });
      userInfo.subscribe((res) => console.log('user info : ', res));

      // user guilds
      const userGuilds = this.http.get(
        'https://discord.com/api/v8/users/@me/guilds',
        {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem(
              'access_token'
            )}`,
          },
        }
      );
      userGuilds.subscribe((res) => console.log('user guilds : ', res));
    });
  }

  login(): void {
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }
}