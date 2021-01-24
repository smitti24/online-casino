import { GamesVM } from './../../models/games-view.model';
import { environment } from './../../../environments/environment';
import { Jackpot } from './../../models/jackpot.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {
  public allJackpots: Array<Jackpot> = new Array<Jackpot>();

  constructor(private _apiService: ApiService) {

  }

  public async getAllJackpots(): Promise<void> {
    await this._apiService.get<Jackpot>(`${environment.baseUrl}jackpots.php`)
      .toPromise().then((jackpots: Array<Jackpot>) => {
        this.allJackpots = jackpots;
      });
  }

  public updateJackpotAmounts(gamesToCheck: Array<GamesVM>): void {
    interval(1000).subscribe(x => {
      this.getAllJackpots().then(() => {
        this.allJackpots.forEach(jackpot => {
          gamesToCheck.forEach(game => {
            if (game.id === jackpot.game) {
              game.jackpotAmount = jackpot?.amount?.toString();
            }
          });
        });
      });
    });
  }
}
