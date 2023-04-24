import { Component,Input,Output,EventEmitter } from '@angular/core';
import { buttonType } from '../button.type';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Input()label!: string;
  @Input() type: buttonType = buttonType.Primary;
  @Output() clicked = new EventEmitter();

  getButtonClass(): string {
    switch (this.type) {
      case buttonType.Primary:
        return 'btn-primary';
      case buttonType.Secondary:
        return 'btn-secondary';
      default:
        return '';
    }
  }

  onClick() {
    this.clicked.emit();
  }
}
