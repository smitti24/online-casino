import { SlotsGamesRoutingModule } from './slots-games.routing.module';
import { SharedModule } from '../../shared/modules/shared.module';
import { SlotsGamesComponent } from './slots-games.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SlotsGamesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SlotsGamesRoutingModule
  ],
  exports: [
    SlotsGamesComponent
  ],
  providers: [],
})
export class SlotsGamesModule {}
