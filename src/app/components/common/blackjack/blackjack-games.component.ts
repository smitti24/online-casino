import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BlackjackGamesService } from './services/blackjack-games.service';

@Component({
  selector: 'app-new-games',
	templateUrl: './blackjack-games.component.html',
	styleUrls: ['./blackjack-games.component.scss']
})

export class BlackjackGamesComponent implements AfterViewInit {

  constructor(public _blackjackGamesService: BlackjackGamesService){

  }
  ngAfterViewInit(): void {
    this._blackjackGamesService.updateJackpotAmount();
  }

}
