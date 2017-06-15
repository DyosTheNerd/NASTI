import {FactionItem} from './faction';
import {isUndefined} from 'util';

export class Player {
  name: string;
  id: number;
  hasWon: boolean;
  faction: FactionItem;
  target: FactionItem;



  validPlayer(): boolean {
    let result = true;
    if (this.name === '' ||  isUndefined(this.name)) {
      result = false;
    }
    if (this.faction === null ||  isUndefined(this.faction)) {
      result = false;
    }
    if (this.target === null ||  isUndefined(this.target)) {
      result = false;
    }

    return result;
  }
}
