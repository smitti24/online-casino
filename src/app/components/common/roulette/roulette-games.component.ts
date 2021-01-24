import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouletteGamesService } from './services/roulette-games.service';

@Component({
  selector: 'app-new-games',
	templateUrl: './roulette-games.component.html',
	styleUrls: ['./roulette-games.component.scss']
})

export class RouletteGamesComponent implements AfterViewInit {

  constructor(public _rouletteGamesService: RouletteGamesService){

  }
  ngAfterViewInit(): void {
    this._rouletteGamesService.updateJackpotAmount();
  }

}
