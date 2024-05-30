import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../shared/models/Character.model';
import { Observable } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  characters$: Observable<Character[]>;

  ngOnInit(): void {
    this.characters$ = this.characterService.favorites$;
  }

  removeFromFavorite(char: Character) {
    this.characterService.removeFromFavorites(char.id);
  }
}
