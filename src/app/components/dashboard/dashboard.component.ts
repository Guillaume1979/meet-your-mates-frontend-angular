import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayerService } from '../../core/service/player.service';
import { Player } from '../../core/model/player';
import { AuthService } from '../../core/service/auth.service';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Guild } from '../../core/model/guild';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  activePlayer = new Player();
  isAuth = new Observable<boolean>();
  player = new Player();

  sub = new Subscription();

  constructor(
    private readonly playerService: PlayerService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated$;
    this.sub.add(
      this.authService.activeUser$
        .pipe(switchMap((p) => this.playerService.getPlayer(p.id)))
        .subscribe((player) => (this.player = player))
    );
  }

  // ajouter une méthode générique pour l'ensemble de l'appli pour récupérer les images
  // <img src="https://cdn.discordapp.com/avatars/{{activePlayer.discordId}}/{{activePlayer.avatar}}" alt="avatar du joueur" width="50">
  // <img src="https://cdn.discordapp.com/avatars/{{(activePlayer | async)?.discordId}}/{{(activePlayer | async)?.avatar}}" alt="avatar du joueur" width="50">

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
