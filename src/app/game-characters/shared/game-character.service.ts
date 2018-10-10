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
    this.gameCharacterList = this.firebase.list('gameCharacters'); // this gameCharacters argument might be wrong. Node name needed.
    return this.gameCharacterList;
  }

  insertGameCharacter(gameCharacter: GameCharacter) {
    this.gameCharacterList.push({
        name: gameCharacter.name,
        player: gameCharacter.player,
        gameClass: gameCharacter.gameClass,
        hp: gameCharacter.hp,
        armor: gameCharacter.armor,
        mightScore: gameCharacter.mightScore,
        mightMod: gameCharacter.mightMod,
        prowessScore: gameCharacter.prowessScore,
        prowessMod: gameCharacter.prowessMod,
        mindScore: gameCharacter.mindScore,
        mindMod: gameCharacter.mindMod,
        magicScore: gameCharacter.magicScore,
        magicMod: gameCharacter.magicMod
    })
  }
  
  updateChameCharacter(gameCharacter: GameCharacter) {
    this.gameCharacterList.update(gameCharacter.$key, {
        name: gameCharacter.name,
        player: gameCharacter.player,
        gameClass: gameCharacter.gameClass,
        hp: gameCharacter.hp,
        armor: gameCharacter.armor,
        mightScore: gameCharacter.mightScore,
        mightMod: gameCharacter.mightMod,
        prowessScore: gameCharacter.prowessScore,
        prowessMod: gameCharacter.prowessMod,
        mindScore: gameCharacter.mindScore,
        mindMod: gameCharacter.mindMod,
        magicScore: gameCharacter.magicScore,
        magicMod: gameCharacter.magicMod
    })
  }

  deleteGameCharacter($key: string) {
    this.gameCharacterList.remove($key);
  }

}
