import { JackpotService } from './../../../../shared/services/jackpots.service';
import { GamesVM } from '../../../../models/games-view.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GamesVMComponent implements OnInit {
  @Input() games: Array<GamesVM> = new Array<GamesVM>();
  @Input() showTopBadge = true;
  @Input() showNewBadge = true;

  constructor() {

  }

  ngOnInit(): void { }

  public setDefaultImage(element: HTMLImageElement): void {
    element.src = '../../../../assets/images/image-placeholder.png';
	}
}
