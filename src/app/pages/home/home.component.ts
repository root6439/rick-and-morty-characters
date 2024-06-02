import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CharacterService } from '../../services/character.service';
import { CardComponent } from '../../components/card/card.component';
import { Character } from '../../shared/models/Character.model';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { NoDataFoundComponent } from '../../components/no-data-found/no-data-found.component';
import { finalize, take } from 'rxjs';
import { Pagination } from '../../shared/models/Pagination.model';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../components/title/title.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/favorites/AppState';
import {
  addFavorite,
  removeFavorite,
} from '../../store/favorites/favorites-actions';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CardComponent,
    SearchInputComponent,
    NoDataFoundComponent,
    CommonModule,
    TitleComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private characterService: CharacterService
  ) {}

  data: Pagination<Character> = {
    info: { count: 0, next: '', pages: 0, prev: '' },
    results: [],
  };

  searchName = '';
  actualPage = 1;
  searching = false;
  animationState = false;

  ngOnInit(): void {
    this.getCharacters();
  }

  addOrRemoveFavorite(char: Character) {
    if (char.favorited) {
      this.store.dispatch(removeFavorite({ id: char.id }));
    } else {
      this.store.dispatch(addFavorite({ char: { ...char } }));
    }

    char.favorited = !char.favorited;
  }

  getCharacters(
    name: string = '',
    page: number = 1,
    scrolled: boolean = false
  ) {
    if (this.data.info.next == null && scrolled) {
      return;
    }
    this.searchName = name;
    this.actualPage = page;
    this.searching = true;

    this.characterService
      .getCharacters(name, page)
      .pipe(
        take(1),
        finalize(() => {
          this.searching = false;
          this.animationState = !this.animationState;
        })
      )
      .subscribe({
        next: (resp) => {
          this.data.info.next = resp.info.next;
          if (page == 1) {
            this.data = resp;
          } else {
            this.data.results = this.data.results.concat(resp.results);
          }
        },
        error: (err) => (this.data.results = []),
      });
  }
}
