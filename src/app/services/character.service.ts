import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../shared/models/Character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get<Character[]>(
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6'
    );
  }
}
