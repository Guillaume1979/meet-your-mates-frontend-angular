import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { NotificationService } from '../../layout/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnDestroy {
  private isAuthenticated = false;
  private isAuthenticatedSubscription!: Subscription;

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

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.isAuthenticated) {
      // todo : à supprimer
      console.log('Le joueur est bien authentifié');
      return true;
    } else {
      // todo : à supprimer
      console.log("Le visiteur n'est pas authentifié");
      this.notifService.show('ERROR', "Vous n'êtes pas authentifié");
      this.router.navigate(['redirect']);
      return false;
    }
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSubscription?.unsubscribe();
  }
}
