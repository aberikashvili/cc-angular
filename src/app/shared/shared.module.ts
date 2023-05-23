import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ButtonsComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [ButtonsComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, CarouselModule],
  exports: [CommonModule, CarouselModule, ButtonsComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
