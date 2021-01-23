import { SharedModule } from './../../shared/modules/shared.module';
import { TopGamesRoutingModule } from './top-games.routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopGamesComponent } from './top-games.component';
import { TopGamesService } from './services/top-games.service';

@NgModule({
  declarations: [
    TopGamesComponent
  ],
  exports: [
    TopGamesComponent
  ],
  imports: [
    CommonModule,
    TopGamesRoutingModule,
    SharedModule
  ],
  providers: [
    TopGamesService
  ],
})
export class TopGamesModule { }
