import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';
import { Character } from '../../shared/models/Character.model';
import { CommonModule } from '@angular/common';
import { AppState } from '../../store/favorites/AppState';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/favorites/favorites-selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  character$: Observable<Character[]>;

  ngOnInit(): void {
    this.character$ = this.store.select(selectFavorites);
  }
}
