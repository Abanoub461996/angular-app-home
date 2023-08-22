import { Component, Input } from '@angular/core';
import { UserNotification } from 'src/app/core/interfaces/notifications';

@Component({
  selector: 'app-side-panel-card',
  templateUrl: './side-panel-card.component.html',
  styleUrls: ['./side-panel-card.component.css'],
})
export class SidePanelCardComponent {
  @Input() item!: UserNotification;
  constructor() {}
  getCardStyles(): string {
    if (this.item.background) {
      return `background: ${this.item.background}`;
    }
    return `background: var(--background)`;
  }
}
