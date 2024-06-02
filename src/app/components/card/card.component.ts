import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, MatRippleModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('favorited', [
      state(
        'true',
        style({
          backgroundColor: '#ffffff',
        })
      ),
      state(
        'false',
        style({
          backdropFilter: 'blur(10px)',
        })
      ),
      transition('true <=> false', [animate('0.5s')]),
    ]),
    trigger('jumpIn', [
      transition('* => *', [
        animate(
          '1s',
          keyframes([
            style({ transform: 'scale(0) translateY(100%)', offset: 0 }),
            style({ transform: 'scale(1.2) translateY(-20px)', offset: 0.5 }),
            style({ transform: 'scale(1) translateY(0)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
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

  @Input()
  animationState: boolean;

  @Output()
  onClickFavorite = new EventEmitter();

  emitClick() {
    this.onClickFavorite.emit();
  }
}
