import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGamesComponent } from './new-games.component';


const routes: Routes = [
  {
    path: '',
    component: NewGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewGamesRoutingModule { }
