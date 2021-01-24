import { PokerGamesService } from './services/poker-games.service';
import { SharedModule } from '../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokerGamesComponent } from './poker-games.component';
import { PokerGamesRoutingModule } from './poker-games-routing.module';

@NgModule({
  declarations: [
    PokerGamesComponent
  ],
  exports: [
    PokerGamesComponent
  ],
  imports: [
    CommonModule,
    PokerGamesRoutingModule,
    SharedModule
  ],
  providers: [
    PokerGamesService
  ],
})
export class PokerGamesModule { }
