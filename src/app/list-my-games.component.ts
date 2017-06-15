import {Component} from '@angular/core';
import {Game} from './game';
import {GAMES} from './mock-games';


@Component({
  selector: 'nasti-list-my-games', // New Angeles STatistical Information
  templateUrl: 'list-my-games.component.html',
  styleUrls: ['list-my-games.component.css']
})

export class ListMyGamesComponent {

  myGames: Game[] = GAMES;
  myExpandedGames: Set<Game> = new Set<Game>();

  isExpanded(game: Game): boolean {
    return this.myExpandedGames.has(game);
  }

  switchExpandStatus(game: Game) {
    if (!this.myExpandedGames.has(game)) {
      this.myExpandedGames.add(game);
    } else {
      this.myExpandedGames.delete(game);
    }
  }

}
