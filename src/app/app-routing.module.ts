import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecordGameComponent} from './record-game.component';
import {ListMyGamesComponent} from './list-my-games.component';

const routes: Routes = [
  { path: '', redirectTo: './game/new', pathMatch: 'full'},
  { path: 'newgame', component: RecordGameComponent },
  { path: 'listgames', component: ListMyGamesComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
