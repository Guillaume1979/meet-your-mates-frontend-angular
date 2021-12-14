import { Session } from './session';
import { Guild } from './guild';

export class Player {
  id = 0;
  username = '';
  avatar?: string;
  role = 'user';
  discordId = '';
  age?: number;
  guilds: Guild[] = [];
  sessions: Session[] = [];

  constructor(init?: Partial<Player>) {
    Object.assign(this, init);
  }
}
