import { NewGamesService } from './services/new-games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
	templateUrl: './new-games.component.html',
	styleUrls: ['./new-games.component.scss']
})

export class NewGamesComponent implements OnInit {

  constructor(public _newGamesService: NewGamesService){

  }
  ngOnInit(): void {
  }

}
