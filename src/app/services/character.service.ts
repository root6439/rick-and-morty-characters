import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../shared/models/Character.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  private favoritesSubject = new BehaviorSubject<Character[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  addToFavorites(char: Character) {
    this.favoritesSubject.next([...this.favoritesSubject.value, char]);
  }

  removeFromFavorites(id: number) {
    const currentList = this.favoritesSubject.value;
    this.favoritesSubject.next(currentList.filter((value) => value.id != id));
  }

  getFavorites() {
    return this.favoritesSubject.getValue();
  }

  getCharacters() {
    return this.http.get<Character[]>(
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6'
    );
  }
}
