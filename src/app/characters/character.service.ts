import { Injectable } from '@angular/core';

import { Character, Profession, Status } from './character';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(profession: any): Character[] {
    return CHARACTERS.filter(character => character.profession === profession);
  }

  getActiveCharacters(profession: any): Character[] {
    return CHARACTERS.filter(character => character.profession === profession && character.status === Status.active);
  }
}
