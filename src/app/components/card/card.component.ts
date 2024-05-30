import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private characterService: CharacterService) {}

  @Input()
  imageUrl: string;

  @Input()
  name: string;

  @Input()
  species: string;

  @Output()
  onClickFavorite = new EventEmitter();

  emitClick() {
    this.onClickFavorite.emit();
  }
}
