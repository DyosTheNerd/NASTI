import {FactionItem} from './faction';

export class Player {
  name: string;
  id: number;
  hasWon: boolean;
  faction: FactionItem;
  target: FactionItem;
}
