import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'new-games',
    loadChildren: () => import('./components/common/new-games/new-games.module').then(m => m.NewGamesModule)
  },
  {
    path: 'top-games',
    loadChildren: () => import('./components/common/top/top-games.module').then(m => m.TopGamesModule)
  },
  {
    path: 'slots-games',
    loadChildren: () => import('./components/common/slots/slots-games.module').then(m => m.SlotsGamesModule)
  },
  {
    path: 'other-games',
    loadChildren: () => import('./components/common/other/other-games.module').then(m => m.OtherGamesModule)
  },
  {
    path: 'blackjack-games',
    loadChildren: () => import('./components/common/blackjack/blackjack-games.module').then(m => m.BlackjackGamesModule)
  },
  {
    path: 'poker-games',
    loadChildren: () => import('./components/common/poker/poker-games.module').then(m => m.PokerGamesModule)
  },
  {
    path: 'roulette-games',
    loadChildren: () => import('./components/common/roulette/roulette-games.module').then(m => m.RouletteGamesModule)
  },
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
