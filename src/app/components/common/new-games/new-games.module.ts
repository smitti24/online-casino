import { SharedModule } from './../../shared/modules/shared.module';
import { NewGamesService } from './services/new-games.service';
import { NewGamesComponent } from './new-games.component';
import { NgModule } from '@angular/core';
import { NewGamesRoutingModule } from './new-games-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NewGamesComponent
  ],
  exports: [
    NewGamesComponent
  ],
  imports: [
    CommonModule,
    NewGamesRoutingModule,
    SharedModule
  ],
  providers: [
    NewGamesService
  ],
})
export class NewGamesModule { }
