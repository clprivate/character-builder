import { Injectable } from '@angular/core';
import { GameCharacter } from "./game-character.model";

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GameCharacterService {

  constructor() { }
}
