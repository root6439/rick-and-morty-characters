import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './AppState';

const selectFavoritesState = createFeatureSelector<AppState>('state');

export const selectFavorites = createSelector(
  selectFavoritesState,
  (state) => state.favorites
);
