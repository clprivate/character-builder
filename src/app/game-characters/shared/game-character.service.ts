import { Injectable } from '@angular/core';
import { GameCharacter } from "./game-character.model";

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { getViewData } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})

export class GameCharacterService {
  gameCharacterList: AngularFireList<any>;
  selectedGameCharacter: GameCharacter = new GameCharacter();

  constructor(private firebase: AngularFireDatabase) {
    

  }

  getData() {
    this.gameCharacterList = this.firebase.list('game-characters'); // this game-characters argument might be wrong. Node name needed.
    return this.gameCharacterList;
  }
  
}
