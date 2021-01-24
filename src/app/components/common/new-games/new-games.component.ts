import { NewGamesService } from './services/new-games.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
	templateUrl: './new-games.component.html',
	styleUrls: ['./new-games.component.scss']
})

export class NewGamesComponent implements AfterViewInit {

  constructor(public _newGamesService: NewGamesService){

  }
  ngAfterViewInit(): void {
    this._newGamesService.updateJackpotAmount();
  }

}
