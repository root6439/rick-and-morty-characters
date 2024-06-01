import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  imageUrl: string;

  @Input()
  name: string;

  @Input()
  species: string;

  @Input()
  type: string;

  @Input()
  favorited: boolean;

  @Output()
  onClickFavorite = new EventEmitter();

  emitClick() {
    this.onClickFavorite.emit();
  }
}
