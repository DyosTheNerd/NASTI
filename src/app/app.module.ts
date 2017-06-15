import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecordGameComponent } from './record-game.component';
import { AppRoutingModule } from './app-routing.module';
import { ListMyGamesComponent } from './list-my-games.component';
import { ViewGameDetailsComponent } from './view-game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordGameComponent,
    ListMyGamesComponent,
    ViewGameDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
