  import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photo-gallery-section',
  templateUrl: './photo-gallery-section.component.html',
  styleUrls: ['./photo-gallery-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoGallerySectionComponent implements AfterViewInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  card = [
    {
      image:'assets/images/header-logo.png',
    }
    
  ]

  ngAfterViewInit(): void {}
}
