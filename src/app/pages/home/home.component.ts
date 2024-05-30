import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CharacterService } from '../../services/character.service';
import { CardComponent } from '../../components/card/card.component';
import { Character } from '../../shared/models/Character.model';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { NoDataFoundComponent } from '../../components/no-data-found/no-data-found.component';
import { Observable } from 'rxjs';
import { Pagination } from '../../shared/models/Pagination.model';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  characters$: Observable<Pagination<Character>>;

  ngOnInit(): void {
    this.getCharacters();
  }

  addToFavorite(char: Character) {
    this.characterService.addToFavorites(char);
  }

  getCharacters(name: string = '') {
    this.characters$ = this.characterService.getCharacters(name);
  }
}
