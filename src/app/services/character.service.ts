import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../shared/models/Character.model';
import { catchError, map, of, throwError } from 'rxjs';
import { Pagination } from '../shared/models/Pagination.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/favorites/AppState';
import { selectFavorites } from '../store/favorites/favorites-selectors';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.select(selectFavorites).subscribe((data) => {
      this.favoriteIds = data.map((value) => value.id);
    });
  }

  private favoriteIds: number[] = [];

  getCharacters(name: string = '', page: number = 1) {
    const params = new HttpParams({ fromObject: { name, page } });
    throwError(() => new Error('test'));

    // throwError()

    return this.http
      .get<Pagination<Character>>(
        'https://rickandmortyapi.com/api/character/',
        { params }
      )
      .pipe(map((value) => this.markFavorites(value)));
  }

  private markFavorites(data: Pagination<Character>): Pagination<Character> {
    data.results = data.results.map((item) => {
      if (this.favoriteIds.includes(item.id)) {
        item.favorited = true;
      } else {
        item.favorited = false;
      }
      return item;
    });

    return data;
  }
}
