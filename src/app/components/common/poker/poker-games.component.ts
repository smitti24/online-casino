import { PokerGamesService } from './services/poker-games.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
	templateUrl: './poker-games.component.html',
	styleUrls: ['./poker-games.component.scss']
})

export class PokerGamesComponent implements AfterViewInit {

  constructor(public _pokerGamesService: PokerGamesService){

  }
  ngAfterViewInit(): void {
    this._pokerGamesService.updateJackpotAmount();
  }

}
