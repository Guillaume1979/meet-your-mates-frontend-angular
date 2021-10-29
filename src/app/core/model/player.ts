export class Player {
  constructor(
    public id?: number,
    public username: string = '',
    public avatar?: string,
    public role: string = 'user',
    public discordId: string = ''
  ) {}
}
