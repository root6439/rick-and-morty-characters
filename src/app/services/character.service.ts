import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Character } from '../shared/models/Character.model';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { Pagination } from '../shared/models/Pagination.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/favorites/AppState';
import { selectFavorites } from '../store/favorites/favorites-selectors';

@Injectable({
  providedIn: 'root',
})
export class CharacterService implements OnInit {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  private favoriteIds: number[];

  ngOnInit(): void {
    this.store.select(selectFavorites).subscribe((data) => {
      this.favoriteIds = data.map((value) => value.id);
    });
  }

  getCharacters(name: string = '') {
    const params = new HttpParams({ fromObject: { name, page: 1 } });

    return this.http
      .get<Pagination<Character>>(
        'https://rickandmortyapi.com/api/character/',
        { params }
      )
      .pipe(
        map((value) => this.markFavorites(value)),
        catchError((_) => of({ results: [] } as Pagination<Character>))
      );
  }

  private markFavorites(data: Pagination<Character>): Pagination<Character> {
    data.results.forEach((item) => {
      console.log(item);

      if (this.favoriteIds.includes(item.id)) {
        item.favorited = true;
      } else {
        item.favorited = false;
      }
    });
    console.log(data);

    return data;
  }
}
