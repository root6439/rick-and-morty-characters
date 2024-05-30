import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  favoritesNumber = 0;

  ngOnInit(): void {
    this.characterService.favorites$.subscribe((value) => {
      this.favoritesNumber = value.length;
    });
  }
}
