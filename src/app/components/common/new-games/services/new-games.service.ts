import { LoaderService } from './../../../shared/components/loader/loader.service';
import { GamesVM } from './../../../../models/games-view.model';
import { JackpotService } from './../../../../shared/services/jackpots.service';
import { GameService } from './../../../../shared/services/games.service';
import { Game } from './../../../../models/game.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewGamesService {
  public newGames: Array<GamesVM> = new Array<GamesVM>();

  constructor(private _gamesService: GameService, private _jackpotService: JackpotService, private _loaderService: LoaderService){

    this.getAllNewGames();
  }

  public getAllNewGames(): void {

    this._gamesService.allGames
    .subscribe((games: Game[]) => {
      games.forEach(game => {
        this._loaderService.show();
        if (game){
          if (this._gamesService.findCategory(game.categories, 'new')){
            const jackpot = this._jackpotService.allJackpots.find(e => game.id === e.game);

            this.newGames.push({
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
