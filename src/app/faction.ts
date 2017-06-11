export class Faction {

  availableFactions = new Array<FactionItem>();
  availableTargets = new Array<FactionItem>();

  usedFactions = new Array<FactionItem>();
  usedTargets = new Array<FactionItem>();


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


}

export class FactionItem {
  name: string;
}
