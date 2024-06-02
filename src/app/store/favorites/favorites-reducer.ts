import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites-actions';
import { AppState } from './AppState';

const initialState: AppState = {
  favorites: [],
};

export const favoritesReduder = createReducer(
  initialState,
  on(addFavorite, (state, { char }) => ({
    ...state,
    favorites: [...state.favorites, char],
  })),
  on(removeFavorite, (state, { id }) => ({
    ...state,
    favorites: state.favorites.filter((value) => value.id != id),
  }))
);
