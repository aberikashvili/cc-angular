import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ButtonsComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ButtonsComponent, HeaderComponent],
  imports: [CommonModule, CarouselModule],
  exports: [CommonModule, CarouselModule, ButtonsComponent, HeaderComponent],
})
export class SharedModule {}
