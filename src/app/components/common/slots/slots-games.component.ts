import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SlotGamesService } from './services/slots-games.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss']
})
export class SlotsGamesComponent implements AfterViewInit {
  constructor(public _slotGamesService: SlotGamesService) { }

  ngAfterViewInit(): void {
    this._slotGamesService.updateJackpotAmount();
  }
}
