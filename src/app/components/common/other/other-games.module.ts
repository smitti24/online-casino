import { OtherGamesRoutingModule } from './other-games.routing.module';
import { OtherGamesComponent } from './other-games.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OtherGamesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OtherGamesRoutingModule
  ],
  exports: [
    OtherGamesComponent
  ],
  providers: [],
})
export class OtherGamesModule {}
