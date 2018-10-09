import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCharacterListComponent } from './game-character-list.component';

describe('GameCharacterListComponent', () => {
  let component: GameCharacterListComponent;
  let fixture: ComponentFixture<GameCharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCharacterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
