import { Injectable, OnDestroy } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { NotificationService } from '../../layout/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnDestroy {
  private isAuthenticated: any;
  private isAuthenticatedSubscription?: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly notifService: NotificationService
  ) {
    this.isAuthenticatedSubscription =
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
      this.notifService.show('SUCCESS', 'Vous êtes bien authentifié');
      return true;
    } else {
      // todo : à supprimer
      console.log("toto n'est PAS authentifié");
      this.notifService.show('ERROR', "Vous n'êtes pas authentifié");
      this.router.navigate(['redirect']);
      return false;
    }
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSubscription?.unsubscribe();
  }
}
