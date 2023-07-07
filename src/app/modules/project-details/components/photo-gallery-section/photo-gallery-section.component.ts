import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photo-gallery-section',
  templateUrl: './photo-gallery-section.component.html',
  styleUrls: ['./photo-gallery-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoGallerySectionComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      500: {
        items: 3,
      },
      800: {
        items: 4,
      },
    },
  };

  cards = [
    {
      image: 'assets/images/header-logo.png',
    },
    {
      image: 'assets/images/header-logo.png',
    },
  ];
};



