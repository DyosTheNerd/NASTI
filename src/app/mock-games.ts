import {Game} from './game';
import {Player} from './player';

export const GAMES = [
  {
    playDate: new Date(),
    id: 12,
    players: [{
      id: 121,
      faction: {name: 'Weyland'},
      target: {name: 'HB'},
      hasWon: true,
      name: 'Carl'
    },
      {
        id: 122,
        faction: {name: 'HB'},
        target: {name: 'Weyland'},
        hasWon: false,
        name: 'Peter'
      },
      {
        id: 123,
        faction: {name: 'NBN'},
        target: {name: 'Jinteki'},
        hasWon: true,
        name: 'Jane'
      },
      {
        id: 124,
        faction: {name: 'Jinteki'},
        target: {name: 'Federalist'},
        hasWon: false,
        name: 'Sam'
      }
    ],
    reference: 'Game night at Peters place '
  },
  {
    id: 13,
    playDate: new Date(),
    players: [{
      id: 131,
      faction: {name: 'Weyland'},
      target: {name: 'Federalist'},
      hasWon: true,
      name: 'Carl'
    },
      {
        id: 132,
        faction: {name: 'HB'},
        target: {name: 'HB'},
        hasWon: false,
        name: 'Peter'
      },
      {
        id: 133,
        faction: {name: 'NBN'},
        target: {name: 'Weyland'},
        hasWon: false,
        name: 'Jane'
      },
      {
        id: 134,
        faction: {name: 'Jinteki'},
        target: {name: 'Jinteki'},
        hasWon: false,
        name: 'Sam'
      }], reference: 'a very close one. '
  },
  {
    id: 14,
    playDate: new Date(),
    players: [{
      id: 141,
      faction: {name: 'Weyland'},
      target: {name: 'HB'},
      hasWon: true,
      name: 'Carl'
    },
      {
        id: 142,
        faction: {name: 'HB'},
        target: {name: 'Weyland'},
        hasWon: false,
        name: 'Peter'
      },
      {
        id: 143,
        faction: {name: 'NBN'},
        target: {name: 'Jinteki'},
        hasWon: true,
        name: 'Jane'
      },
      {
        id: 144,
        faction: {name: 'Jinteki'},
        target: {name: 'Federalist'},
        hasWon: false,
        name: 'Sam'
      }],
    reference: 'awesome game! '
  }
] as Game[];


