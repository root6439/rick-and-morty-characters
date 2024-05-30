import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../shared/models/Character.model';
import { Observable } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { NoDataFoundComponent } from '../../components/no-data-found/no-data-found.component';
import { Router } from '@angular/router';
import { TitleComponent } from '../../components/title/title.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/favorites/AppState';
import { selectFavorites } from '../../store/favorites/favorites-selectors';
import { removeFavorite } from '../../store/favorites/favorites-actions';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CardComponent, NoDataFoundComponent, CommonModule, TitleComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  characters$: Observable<Character[]>;

  ngOnInit(): void {
    this.characters$ = this.store.select(selectFavorites);
  }

  removeFromFavorite(char: Character) {
    // this.characterService.removeFromFavorites(char.id);
    this.store.dispatch(removeFavorite({ id: char.id }));
  }

  goToHome() {
    this.router.navigateByUrl('inicio');
  }
}
