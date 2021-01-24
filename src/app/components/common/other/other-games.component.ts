import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OtherGamesService } from './service/other-games.service';

@Component({
  selector: 'app-other-games',
  templateUrl: './other-games.component.html',
  styleUrls: ['./other-games.component.scss']
})
export class OtherGamesComponent implements AfterViewInit {
  constructor(public _otherGamesService: OtherGamesService) { }

  ngAfterViewInit(): void {
    this._otherGamesService.updateJackpotAmount();
  }
}
