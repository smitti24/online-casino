import { LoaderService } from './components/shared/components/loader/loader.service';
import { JackpotService } from './shared/services/jackpots.service';
import { GameService } from './shared/services/games.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grand-west-casino-online';

  constructor(
    private _gamesService: GameService,
    private _jackpotService: JackpotService,
    private _loaderService: LoaderService,
    private router: Router){
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this._loaderService.show();
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this._loaderService.hide();
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  async ngOnInit(): Promise<void> {
    await this._gamesService.getAllGames();
    await this._jackpotService.getAllJackpots();
  }
}
