import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ButtonsComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { WidgetComponent } from './components/widget/widget.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonsComponent,
    HeaderComponent,
    WidgetComponent,
    FooterComponent,
    SliderComponent,
  ],
  imports: [CommonModule, CarouselModule, RouterModule],
  exports: [
    CommonModule,
    ButtonsComponent,
    HeaderComponent,
    WidgetComponent,
    CarouselModule,
    FooterComponent,
    SliderComponent,
  ],
})
export class SharedModule {}
