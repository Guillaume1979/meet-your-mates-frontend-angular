import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { ApiService } from './service/api.service';
import { AuthService } from './service/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [],
  imports: [OAuthModule.forRoot()],
  providers: [ApiService, AuthService],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    OAuthModule,
  ],
})
export class CoreModule {}
