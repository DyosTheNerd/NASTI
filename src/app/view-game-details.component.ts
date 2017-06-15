import {Component, Input} from '@angular/core';
import {Game} from './game';


@Component({
  selector: 'nasti-view-game-details', // New Angeles STatistical Information
  templateUrl: 'view-game-details.component.html',
  styleUrls: ['view-game-details.component.css']
})

export class ViewGameDetailsComponent {

  @Input() game: Game;

}
