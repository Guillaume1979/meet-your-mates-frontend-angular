export class Game {
  id?: number;
  name = '';
  category = '';

  constructor(init?: Partial<Game>) {
    Object.assign(this, init);
  }
}
