import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopGamesComponent } from './top-games.component';


const routes: Routes = [
  {
    path: '',
    component: TopGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopGamesRoutingModule { }
