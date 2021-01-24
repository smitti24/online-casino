import { JackpotService } from '../../../../shared/services/jackpots.service';
import { Game } from 'src/app/models/game.model';
import { GameService } from '../../../../shared/services/games.service';
import { GamesVM } from '../../../../models/games-view.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlotGamesService {
  public slotGames: Array<GamesVM> = new Array<GamesVM>();

  constructor(private _gamesService: GameService, private _jackpotService: JackpotService){
    this.getAllTopGames();
  }

  public getAllTopGames(): void {
    this._gamesService.allGames
    .subscribe((games: Game[]) => {
      games.forEach(game => {
        if (game){
          if (this._gamesService.findCategory(game.categories, 'slots')){
            const jackpot = this._jackpotService.allJackpots.find(e => game.id === e.game);

            this.slotGames.push({
              id: game.id,
              name: game.name,
              isNew: game.categories.indexOf('new') > -1 ? true : false,
              isTop: game.categories.indexOf('top') > -1 ? true : false,
              image: game.image,
              isJackpot: jackpot ? true : false,
              jackpotAmount: jackpot ? jackpot.amount?.toString() : ''
            });
          }
        }
      });
    });
  }

  public updateJackpotAmount(): void {
    this._jackpotService.updateJackpotAmounts(this.slotGames);
  }
}
