import { Player } from './player';

export class Guild {
  id = 0;
  name = '';
  icon = '';
  discordId = '';
  members: Player[] = [];

  constructor(init?: Partial<Guild>) {
    Object.assign(this, init);
  }
}
