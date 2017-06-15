import { Injectable } from '@angular/core';
import { GAMES } from './mock-games';
import { Game } from './game';

@Injectable()
export class MyGamesService {


  listMyGames(): Promise<Game[]> {
    return Promise.resolve(GAMES);
  }
}

