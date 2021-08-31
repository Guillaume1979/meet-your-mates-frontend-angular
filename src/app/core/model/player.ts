export class Player {
  constructor(
    public id?: number,
    public username: string = '',
    public role: string = 'user',
    public avatar?: string
  ) {}
}
