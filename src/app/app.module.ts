import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { GameCharactersComponent } from './game-characters/game-characters.component';
import { GameCharacterComponent } from './game-characters/game-character/game-character.component';
import { GameCharacterListComponent } from './game-characters/game-character-list/game-character-list.component'

@NgModule({
  declarations: [
    AppComponent,
    GameCharactersComponent,
    GameCharacterComponent,
    GameCharacterListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
