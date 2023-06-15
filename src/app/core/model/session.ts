import { Game } from './game';
import { Player } from './player';

export class Session {
  id?: number;
  date = '';
  owner = new Player(); // todo à ajouter coté back
  minPlayers = 0;
  maxPlayers = 0;
  game = new Game({ name: '', category: '' });
  registeredPlayers: Player[] = [];
  queueingPlayers: Player[] = [];

  constructor(init?: Partial<Session>) {
    Object.assign(this, init);
  }
}
