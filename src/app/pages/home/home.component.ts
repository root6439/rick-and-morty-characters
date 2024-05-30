import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CharacterService } from '../../services/character.service';
import { CardComponent } from '../../components/card/card.component';
import { Character } from '../../shared/models/Character.model';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CardComponent,
    SearchInputComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  characters: Character[] = [];

  ngOnInit(): void {
    this.getCharacters();
  }

  addToFavorite(char: Character) {
    this.characterService.addToFavorites(char);
  }

  getCharacters(name: string = '') {
    this.characterService.getCharacters(name).subscribe((resp) => {
      this.characters = resp.results;
    });
  }
}
