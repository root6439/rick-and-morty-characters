import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../shared/models/Character.model';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Pagination } from '../shared/models/Pagination.model';

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

  getCharacters(name: string = '') {
    const params = new HttpParams({ fromObject: { name, page: 1 } });

    return this.http
      .get<Pagination<Character>>(
        'https://rickandmortyapi.com/api/character/',
        { params }
      )
      .pipe(catchError((_) => of({ results: [] } as Pagination<Character>)));
  }
}
