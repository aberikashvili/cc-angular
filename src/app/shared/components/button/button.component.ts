import { Component, ChangeDetectionStrategy, Input, Output,EventEmitter } from '@angular/core';
export type ButtonType = 'primary' | 'secondary' | 'awardsbtn'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent  {
  
  @Input() type: ButtonType = 'primary';
  @Output() clicked = new EventEmitter();

  get isPrimary(): boolean {
    return this.type==="primary";
  }
  
  get isSecondary(): boolean {
    return this.type === "secondary";
  }

  onClick() {
    this.clicked.emit();
  }

  get awardsBtn():boolean {
    return this.type==="awardsbtn";
  }

  

}
