import { Component, OnInit } from '@angular/core';
import { SlotGamesService } from './services/slots-games.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss']
})
export class SlotsGamesComponent implements OnInit {
  constructor(public _slotGamesService: SlotGamesService) { }

  ngOnInit(): void { }
}
