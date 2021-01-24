import { TopGamesService } from './services/top-games.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
	templateUrl: './top-games.component.html',
	styleUrls: ['./top-games.component.scss']
})

export class TopGamesComponent implements AfterViewInit {

  constructor(public _topGamesService: TopGamesService){
  }
  ngAfterViewInit(): void {
    this._topGamesService.updateJackpotAmount();
  }

}
