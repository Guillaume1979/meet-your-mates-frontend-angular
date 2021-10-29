import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Player } from '../../core/model/player';
import { AuthService } from '../../core/service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // activePlayer = new Player();
  isAuth = new Observable<boolean>();
  activePlayer = new Observable<Player>();

  constructor(
    private readonly apiService: ApiService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated$;
    // this.authService.activeUser$.subscribe(
    //   (player) => (this.activePlayer = player)
    // );
    this.activePlayer = this.authService.activeUser$;
  }
}
