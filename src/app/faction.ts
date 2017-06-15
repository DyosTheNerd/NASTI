export class Faction {

  availableFactions = new Array<FactionItem>();
  availableTargets = new Array<FactionItem>();

  usedFactions = new Array<FactionItem>();
  usedTargets = new Array<FactionItem>();

  fedFaction;

  messages = new Array<String>();

  constructor() {
    let cur: FactionItem = new FactionItem();
    cur.name = 'GlobalSec';
    this.availableFactions.push(cur);
    this.availableTargets.push(cur);

    cur = new FactionItem();
    cur.name = 'HB';
    this.availableFactions.push(cur);
    this.availableTargets.push(cur);

    cur = new FactionItem();
    cur.name = 'Jinteki';
    this.availableFactions.push(cur);
    this.availableTargets.push(cur);

    cur = new FactionItem();
    cur.name = 'Melange';
    this.availableFactions.push(cur);
    this.availableTargets.push(cur);

    cur = new FactionItem();
    cur.name = 'NBN';
    this.availableFactions.push(cur);
    this.availableTargets.push(cur);

    cur = new FactionItem();
    cur.name = 'Weyland';
    this.availableFactions.push(cur);
    this.availableTargets.push(cur);

    cur = new FactionItem();
    cur.name = 'Federal';
    this.fedFaction = cur;
    this.availableTargets.push(cur);

  }


  addFactionToUsedFaction(faction: FactionItem) {
    this.swapFactionFromTo(faction, this.availableFactions, this.usedFactions);
  }

  addFactionToUsedTargets(faction: FactionItem) {
    this.swapFactionFromTo(faction, this.availableTargets, this.usedTargets);
  }

  removeFactionFromUsedTargets(faction: FactionItem) {
    this.swapFactionFromTo(faction, this.usedTargets, this.availableTargets);
  }
  removeFactionFromUsedFactions(faction: FactionItem) {
    this.swapFactionFromTo(faction, this.usedFactions, this.availableFactions);
  }

  private swapFactionFromTo(faction: FactionItem, source: Array<FactionItem>, target: Array<FactionItem>) {
    for (let i = 0; i < source.length; i++) {
      if (source[i] === faction) {
        source.splice(i, 1);
      }
    }

    target.push(faction);
  }

  /**
   * this starts a full validation on the factions
   */
  validate(): Array<String> {
    this.messages = new Array<String>();

    this.validateAllChosenTargetsAreChosenFactions();

    return this.messages;
  }

  /* this method validates that each selected target was also selected as faction, or is Fed */
  private validateAllChosenTargetsAreChosenFactions() {

    for (let i = 0; i < this.usedTargets.length; i++) {

      let validTarget = false;
      if (this.usedTargets[i] === this.fedFaction) {
        validTarget = true;
        continue;
      }
      for (let k = 0; k < this.usedFactions.length; k++) {
        if (this.usedFactions[k] === this.usedTargets[i]) {
          validTarget = true;
          break;
        }
      }

      if (!validTarget) {
        this.messages.push('' + this.usedTargets[i].name + ' was not chosen as a faction.');
      }
    }
  }

}

export class FactionItem {
  name: string;
}
