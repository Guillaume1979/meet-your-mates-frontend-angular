import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerService } from './service/player.service';
import { AuthService } from './service/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';

@NgModule({
  declarations: [],
  imports: [OAuthModule.forRoot()],
  providers: [
    // PlayerService,
    // AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [BrowserAnimationsModule, HttpClientModule, OAuthModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      const msg = 'CoreModule is already loaded';
      console.log(msg);
      throw new Error(msg);
    }
  }
}
