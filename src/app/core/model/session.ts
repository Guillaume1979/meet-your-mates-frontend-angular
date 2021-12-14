import { Game } from './game';
import { Player } from './player';

export class Session {
  id?: number;
  date = '';
  game = new Game({ name: '', category: '' });
  registeredPlayers: Player[] = [];

  constructor(init?: Partial<Session>) {
    Object.assign(this, init);
  }
}
