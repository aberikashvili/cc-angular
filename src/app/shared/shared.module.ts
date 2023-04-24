import { NgModule } from '@angular/core';
import { ButtonsComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ButtonsComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonsComponent],
})
export class SharedModule {}
