import { BlackjackGamesService } from './services/blackjack-games.service';
import { BlackjackGamesComponent } from './blackjack-games.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackjackGamesRoutingModule } from './blackjack-games-routing.module';

@NgModule({
  declarations: [
    BlackjackGamesComponent
  ],
  exports: [
    BlackjackGamesComponent
  ],
  imports: [
    CommonModule,
    BlackjackGamesRoutingModule,
    SharedModule
  ],
  providers: [
    BlackjackGamesService
  ],
})
export class BlackjackGamesModule { }
