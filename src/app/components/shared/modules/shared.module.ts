import { LoaderService } from './../components/loader/loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesVMComponent } from '../components/generic-games-view/game-view.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// tslint:disable-next-line: typedef
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    GamesVMComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    LottieModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    GamesVMComponent,
    LoaderComponent
  ],
  providers: [
    LoaderService
  ],
})
export class SharedModule {}
