import { Component } from '@angular/core';
import {Faction, FactionItem} from './faction';
import { Player } from './player';

@Component({
  selector: 'nasti-record-game', // New Angeles STatistical Information
  templateUrl: 'record-game.component.html',
  styleUrls: ['record-game.component.css']
})

export class RecordGameComponent {

  curName = '';
  curSelectedFaction;
  curSelectedTarget;
  curHasWon = false;

  gameReference = '';
  gameDate = new Date();

  faction = new Faction();

  players = new Array<Player>();

  hasError = false;

  validations = new Array<String>();


  add(): boolean {

    const newPlayer = new Player();
    newPlayer.faction = this.curSelectedFaction;
    newPlayer.target = this.curSelectedTarget;
    newPlayer.name = this.curName.trim();
    newPlayer.hasWon = this.curHasWon;

    if (newPlayer.validPlayer()) {
      this.faction.addFactionToUsedFaction(this.curSelectedFaction);

      this.faction.addFactionToUsedTargets(this.curSelectedTarget);

      this.players.push(newPlayer);
      this.resetScreenValues();
      return true;
    }


    return false;
  }

  private resetScreenValues() {
    this.curName = '';
    this.curSelectedFaction = null;
    this.curSelectedTarget = null;
    this.curHasWon = false;
  }


  remove(oldPlayer: Player) {
    this.faction.removeFactionFromUsedTargets(oldPlayer.target);
    this.faction.removeFactionFromUsedFactions(oldPlayer.faction);

    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i] === oldPlayer) {
        this.players.splice(i, 1);
      }
    }

  }

  finalize() {
    this.validate();
    if (!this.hasError) {
      this.faction = new Faction();
      this.players = new Array<Player>();
    } else {
      // somthing
    }
  }

  validate() {
    this.hasError = false;
    this.validations = new Array<String>();

    this.validatePlayerNumber();

    this.validateSomeoneLost();

    this.validateFedWin(); // validate that if the federalist nobody else does

    const facmsg: Array<String> = this.faction.validate();
    if (facmsg.length > 0) {
      this.validations = this.validations.concat(facmsg);
      this.hasError = true;
    }


  }

  private validatePlayerNumber() {
    if (this.players.length < 4) {
      this.hasError = true;
      this.validations.push('A game needs at least 4 players');
    }
  }

  private validateSomeoneLost() {
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i].hasWon) {
        return;
      }
    }
    this.hasError = true;
    this.validations.push('At least one person must loose the game');
  }

  private validateFedWin() {
    let fedWon = false;
    let nonFedWon = false;
    for (let i = 0; i < this.players.length; i++) {

      if (this.players[i].hasWon && this.players[i].target === this.faction.fedFaction) {
        fedWon = true;
      }
      if (this.players[i].hasWon && !(this.players[i].target === this.faction.fedFaction)) {
        nonFedWon = true;
      }
    }
    if (fedWon && nonFedWon) {
      this.hasError = true;
      this.validations.push('If the Fed player won, no one else can win.');
    }
  }
}

