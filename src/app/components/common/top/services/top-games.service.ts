import { JackpotService } from './../../../../shared/services/jackpots.service';
import { GamesVM } from './../../../../models/games-view.model';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/shared/services/games.service';

@Injectable({
  providedIn: 'root'
})
export class TopGamesService {
  public topGames: Array<GamesVM> = new Array<GamesVM>();

  constructor(private _gamesService: GameService, private _jackpotService: JackpotService){
    this.getAllTopGames();
  }

  public getAllTopGames(): void {
    this._gamesService.allGames
    .subscribe((games: Game[]) => {
      games.forEach(game => {
        if (game){
          if (this._gamesService.findCategory(game.categories, 'top')){
            const jackpot = this._jackpotService.allJackpots.find(e => game.id === e.game);

            this.topGames.push({
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
}
