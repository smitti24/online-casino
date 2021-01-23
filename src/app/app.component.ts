import { JackpotService } from './shared/services/jackpots.service';
import { GameService } from './shared/services/games.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grand-west-casino-online';

  constructor(private _gamesService: GameService, private _jackpotService: JackpotService){

  }
  async ngOnInit(): Promise<void> {
    await this._gamesService.getAllGames();
    await this._jackpotService.getAllJackpots();
  }
}
