import { environment } from './../../../environments/environment';
import { Jackpot } from './../../models/jackpot.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
