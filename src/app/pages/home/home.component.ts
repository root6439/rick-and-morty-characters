import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CharacterService } from '../../services/character.service';
import { CardComponent } from '../../components/card/card.component';
import { Character } from '../../shared/models/Character.model';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { NoDataFoundComponent } from '../../components/no-data-found/no-data-found.component';
import { take } from 'rxjs';
import { Pagination } from '../../shared/models/Pagination.model';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../components/title/title.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/favorites/AppState';
import {
  addFavorite,
  removeFavorite,
} from '../../store/favorites/favorites-actions';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private characterService: CharacterService
  ) {}

  data: Pagination<Character>;

  ngOnInit(): void {
    this.getCharacters();
  }

  addOrRemoveFavorite(char: Character) {
    if (char.favorited) {
      char.favorited = false;
      this.store.dispatch(removeFavorite({ id: char.id }));
    } else {
      char.favorited = true;
      this.store.dispatch(addFavorite({ char }));
    }
  }

  getCharacters(name: string = '') {
    this.characterService
      .getCharacters(name)
      .pipe(take(1))
      .subscribe((resp) => (this.data = { ...resp }));
  }
}
