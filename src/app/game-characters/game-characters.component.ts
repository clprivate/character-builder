import { Component, OnInit } from '@angular/core';
import { GameCharacterService } from './shared/game-character.service';

@Component({
  selector: 'app-game-characters',
  templateUrl: './game-characters.component.html',
  styleUrls: ['./game-characters.component.css'],
  providers: [GameCharacterService]
})

export class GameCharactersComponent implements OnInit {

  constructor(private gameCharacterService: GameCharacterService) { }

  ngOnInit() {
  }

}
