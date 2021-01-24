import { RouletteGamesService } from './services/roulette-games.service';
import { RouletteGamesRoutingModule } from './roulette-games-routing.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouletteGamesComponent } from './roulette-games.component';

@NgModule({
  declarations: [
    RouletteGamesComponent
  ],
  exports: [
    RouletteGamesComponent
  ],
  imports: [
    CommonModule,
    RouletteGamesRoutingModule,
    SharedModule
  ],
  providers: [
    RouletteGamesService
  ],
})
export class RouletteGamesModule { }
