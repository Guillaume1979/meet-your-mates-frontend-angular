import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isAuthenticated = false;

  constructor(private readonly authService: AuthService) {
    this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
    );
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.isAuthenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getRawToken()}`,
        },
      });
    }
    return next.handle(request);
  }
}
