import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesVMComponent } from '../components/generic-games-view/game-view.component';

@NgModule({
  declarations: [
    GamesVMComponent
  ],
  imports: [ CommonModule ],
  exports: [
    GamesVMComponent
  ],
  providers: [],
})
export class SharedModule {}
