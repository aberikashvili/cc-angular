import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ButtonsComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [ButtonsComponent, HeaderComponent, WidgetComponent],
  imports: [CommonModule, CarouselModule],
  exports: [CommonModule, ButtonsComponent, HeaderComponent, WidgetComponent,CarouselModule],
})
export class SharedModule {
}
