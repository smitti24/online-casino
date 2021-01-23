import { environment } from './../../../environments/environment.prod';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  public allGames: Observable<Game[]> = new Observable<Game[]>();

  constructor(private _apiService: ApiService){

  }

  public async getAllGames(): Promise<void> {
    this.allGames = await this._apiService.get<Game>(`${environment.baseUrl}games.php`);
  }

  public findCategory(categories: Array<string>, category: string): boolean {
    return categories.indexOf(category) > -1 ? true : false;
  }

}
