import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ApiService } from './service/api.service';
import { AuthService } from './service/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [OAuthModule.forRoot()],
  providers: [
    ApiService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    OAuthModule,
    FontAwesomeModule,
  ],
})
export class CoreModule {}
