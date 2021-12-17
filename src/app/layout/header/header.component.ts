import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import {
  faGamepad,
  faKeyboard,
  faMouse,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { Player } from '../../core/model/player';
import { switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  discord = faDiscord;
  disconnect = faPowerOff;
  keyboard = faKeyboard;
  mouse = faMouse;
  gamepad = faGamepad;

  isAuthenticated = false;
  currentPlayer = new Player();

  link = '';

  triggerPlayerUpdate$ = new Subject();

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((state) => {
      this.isAuthenticated = state;
      this.triggerPlayerUpdate$.next(state);
      this.link = state ? 'dashboard' : '';
    });

    this.triggerPlayerUpdate$
      .pipe(switchMap(() => this.authService.activeUser$))
      .subscribe((currentPlayer) => (this.currentPlayer = currentPlayer));
    // todo : vérifier le fonctionnement + traiter quand le joueur se déconnecte
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
