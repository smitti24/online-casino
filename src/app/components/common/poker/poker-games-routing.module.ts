import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokerGamesComponent } from './poker-games.component';


const routes: Routes = [
  {
    path: '',
    component: PokerGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerGamesRoutingModule { }
