import { NgModule } from '@angular/core';
import { ButtonsComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [ButtonsComponent,HeaderComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonsComponent,HeaderComponent],
})
export class SharedModule {}
