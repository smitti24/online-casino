export class GamesVM {
  public id: string | undefined = '';
  public name: string | undefined;
  public isNew: boolean | undefined = false;
  public isTop: boolean | undefined = false;
  public category?: string | undefined = '';
  public image: string | undefined = '';
  public isJackpot?: boolean;
  public jackpotAmount?: string;
}
