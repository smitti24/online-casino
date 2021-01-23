import { TopGamesService } from './services/top-games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
	templateUrl: './top-games.component.html',
	styleUrls: ['./top-games.component.scss']
})

export class TopGamesComponent implements OnInit {

  constructor(public _topGamesService: TopGamesService){

  }
  ngOnInit(): void {
  }

}
