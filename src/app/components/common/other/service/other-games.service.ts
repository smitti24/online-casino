import { Game } from 'src/app/models/game.model';
import { GamesVM } from './../../../../models/games-view.model';
import { JackpotService } from './../../../../shared/services/jackpots.service';
import { GameService } from './../../../../shared/services/games.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherGamesService {
  public otherGames: Array<GamesVM> = new Array<GamesVM>();

  constructor(private _gamesService: GameService, private _jackpotService: JackpotService) {
    this.getAllOtherGames();
  }

  public getAllOtherGames(): void {
    this._gamesService.allGames
    .subscribe((games: Game[]) => {
      games.forEach(game => {
        if (game){
          if (this._gamesService.findCategory(game.categories, 'ball')
          || this._gamesService.findCategory(game.categories, 'virtual')
          || this._gamesService.findCategory(game.categories, 'fun')){
            const jackpot = this._jackpotService.allJackpots.find(e => game.id === e.game);

            this.otherGames.push({
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
