import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';
import { Character } from '../../shared/models/Character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  character$: Observable<Character[]>

  ngOnInit(): void {
    this.character$ = this.characterService.favorites$;
  }
}
