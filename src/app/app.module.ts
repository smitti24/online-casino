import { RouletteGamesModule } from './components/common/roulette/roulette-games.module';
import { PokerGamesModule } from './components/common/poker/poker-games.module';
import { ApiService } from './shared/services/api.service';
import { SharedModule } from './components/shared/modules/shared.module';
import { DashboardModule } from './components/common/dashboard/dashboard.module';
import { JackpotService } from './shared/services/jackpots.service';
import { GameService } from './shared/services/games.service';
import { HttpClientModule } from '@angular/common/http';
import { NewGamesModule } from './components/common/new-games/new-games.module';
import { NavbarComponent } from './components/shared/header/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopGamesModule } from './components/common/top/top-games.module';
import { RouterModule } from '@angular/router';
import { BlackjackGamesModule } from './components/common/blackjack/blackjack-games.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NewGamesModule,
    TopGamesModule,
    NewGamesModule,
    DashboardModule,
    BlackjackGamesModule,
    PokerGamesModule,
    RouletteGamesModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    GameService,
    ApiService,
    JackpotService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

