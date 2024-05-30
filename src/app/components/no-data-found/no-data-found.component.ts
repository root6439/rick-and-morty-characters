import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  standalone: true,
  imports: [],
  templateUrl: './no-data-found.component.html',
  styleUrl: './no-data-found.component.scss',
})
export class NoDataFoundComponent {
  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  textButton: string;

  @Output()
  onClickButton = new EventEmitter();

  onClick() {
    this.onClickButton.emit();
  }
}
