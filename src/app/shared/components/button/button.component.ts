import { Component, ChangeDetectionStrategy, Input, Output,EventEmitter } from '@angular/core';
import { buttonType } from './button-type.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent  {
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
