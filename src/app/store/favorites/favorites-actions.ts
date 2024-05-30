import { createAction, props } from '@ngrx/store';
import { Character } from '../../shared/models/Character.model';

export const addFavorite = createAction(
  '[Favorite] - Add Favorite',
  props<{ char: Character }>()
);

export const removeFavorite = createAction(
  '[Favorite] - Remove Favorite',
  props<{ id: number }>()
);
