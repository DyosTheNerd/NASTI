import { Component } from '@angular/core';
import {Faction, FactionItem} from './faction';
import { Player } from './player';

@Component({
  selector: 'nasti-record-game', // New Angeles STatistical Information
  templateUrl: 'record-game.component.html',
  styleUrls: ['record-game.component.css']
})

export class RecordGameComponent {


  faction = new Faction();

  players = new Array<Player>();


  add(name: string, faction: FactionItem, target: FactionItem, hasWon: boolean): void {
    name = name.trim();
    this.faction.addFactionToUsedFaction(faction);

    this.faction.addFactionToUsedTargets(target);

    const newPlayer = new Player();
    newPlayer.faction = faction;
    newPlayer.target = target;
    newPlayer.name = name;
    newPlayer.hasWon = hasWon;

    this.players.push(newPlayer);

  }


  remove(oldPlayer: Player){
    this.faction.removeFactionFromUsedTargets(oldPlayer.target);
    this.faction.removeFactionFromUsedFactions(oldPlayer.faction);

    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i] === oldPlayer) {
        this.players.splice(i, 1);
      }
    }

  }

  finalize() {
    this.faction = new Faction();
  }
}

