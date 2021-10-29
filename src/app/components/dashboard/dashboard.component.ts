import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Player } from '../../core/model/player';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];
  activePlayer = new Player();

  constructor(
    private readonly apiService: ApiService,
    private authService: AuthService
  ) {}
  // todo à remettre
  ngOnInit(): void {
    /*    this.apiService.getPlayers().subscribe(
      (data) => {
        this.players = data;
        console.log('players = ', this.players);
      }
    );*/
    this.authService.activeUser$.subscribe(
      (player) => (this.activePlayer = player)
    );
    console.log('toto');
  }

  get isAuthenticated(): boolean {
    let userState = false;
    this.authService.isAuthenticated$.subscribe((state) => (userState = state));
    return userState;
  }
}
