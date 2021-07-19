import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: any;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.authService.isAuthenticated$.subscribe(
      (state) => (this.isAuthenticated = state)
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isAuthenticated) {
      // todo : à supprimer
      console.log('toto est bien authentifié');
      return true;
    } else {
      // todo : à supprimer
      console.log("toto n'est PAS authentifié");
      this.router.navigate(['redirect']);
      return false;
    }
  }
}
