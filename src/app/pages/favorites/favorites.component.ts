import { Component, DestroyRef, OnInit, inject } from '@angular/core';
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CardComponent, NoDataFoundComponent, CommonModule, TitleComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  private readonly destroy: DestroyRef = inject(DestroyRef);

  characters$: Observable<Character[]>;

  ngOnInit(): void {
    this.characters$ = this.store
      .select(selectFavorites)
      .pipe(takeUntilDestroyed(this.destroy));
  }

  removeFromFavorite(char: Character) {
    this.store.dispatch(removeFavorite({ id: char.id }));
  }

  goToHome() {
    this.router.navigateByUrl('inicio');
  }
}
