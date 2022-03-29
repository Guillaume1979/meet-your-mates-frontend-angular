import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlayerService } from '../../core/service/player.service';
import { Player } from '../../core/model/player';
import { AuthService } from '../../core/service/auth.service';
import { Observable, Subscription } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { SessionService } from '../../core/service/session.service';
import { Session } from '../../core/model/session';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  player = new Player();
  sub = new Subscription();

  constructor(
    private readonly playerService: PlayerService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.authService.activeUser$
        .pipe(
          switchMap((player) => this.playerService.getDashboardData(3)),
          tap((p) => console.warn(p)) //todo: à virer
        )
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
