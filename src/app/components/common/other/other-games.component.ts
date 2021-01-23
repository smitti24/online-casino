import { Component, OnInit } from '@angular/core';
import { OtherGamesService } from './service/other-games.service';

@Component({
  selector: 'app-other-games',
  templateUrl: './other-games.component.html',
  styleUrls: ['./other-games.component.scss']
})
export class OtherGamesComponent implements OnInit {
  constructor(public _otherGamesService: OtherGamesService) { }

  ngOnInit(): void { }
}
