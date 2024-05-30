import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../shared/models/Character.model';
import { Observable } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { NoDataFoundComponent } from '../../components/no-data-found/no-data-found.component';
import { Router } from '@angular/router';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CardComponent, NoDataFoundComponent, CommonModule, TitleComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  characters$: Observable<Character[]>;

  ngOnInit(): void {
    this.characters$ = this.characterService.favorites$;
  }

  removeFromFavorite(char: Character) {
    this.characterService.removeFromFavorites(char.id);
  }

  goToHome() {
    this.router.navigateByUrl('inicio');
  }
}
