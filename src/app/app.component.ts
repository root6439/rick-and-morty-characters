import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'heart',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/heart.svg')
    );
    iconRegistry.addSvgIcon(
      'heart_filled',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/heart_filled.svg')
    );
  }

  title = 'rick-and-morty-characters';
}
