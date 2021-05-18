import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Player } from '../../core/model/player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];

  constructor(private readonly apiService: ApiService) {}
  // todo à remettre
  ngOnInit(): void {
    /*    this.apiService.getPlayers().subscribe(
      (data) => {
        this.players = data;
        console.log('players = ', this.players);
      }
    );*/
  }
}
