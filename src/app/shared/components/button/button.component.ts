import { Component, ChangeDetectionStrategy, Input, Output,EventEmitter } from '@angular/core';
export type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent  {
  @Input() width?: string;
  @Input() type: ButtonType = 'primary';
  @Output() clicked = new EventEmitter();

  get customWidth(): string | undefined {
    return this.width;
  }

  get isPrimary(): boolean {
    return this.type==="primary";
  }
  
  get isSecondary(): boolean {
    return this.type === "secondary";
  }

  onClick() {
    this.clicked.emit();
  }
}
