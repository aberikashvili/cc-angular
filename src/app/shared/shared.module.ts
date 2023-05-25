import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ButtonsComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { WidgetComponent } from './components/widget/widget.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [ButtonsComponent, HeaderComponent, WidgetComponent,FooterComponent],
  imports: [CommonModule, CarouselModule],
  exports: [CommonModule, ButtonsComponent, HeaderComponent, WidgetComponent,CarouselModule,FooterComponent],
})
export class SharedModule {
}
