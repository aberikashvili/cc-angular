import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  
} from '@angular/core';
import { OwlOptions,} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements AfterViewInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText:['',''],
    responsive: {
      0: {
        items: 1,
      },
      200: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    
  };

services: any;
  
  ngAfterViewInit(): void {}
  cards = [ 
    {
      title: 'სუსტი დენები',
      services: [
        'კომპიუტერია, ტელეფონია, ტელევიზია',
        'ხანძარსაწინააღმდეგო სიგნალიზაცია,',
        'ვიდეო მეთვალყურეობა',
        'ფონური მუსიკა',
        'სისტემების კომპიუტერული მართვა (BMS)',
      ],
    },
    {
      title: 'სუსტი დენები',
      services: [
        'კომპიუტერია, ტელეფონია, ტელევიზია',
        'ხანძარსაწინააღმდეგო სიგნალიზაცია,',
        'ვიდეო მეთვალყურეობა',
        'ფონური მუსიკა',
        'სისტემების კომპიუტერული მართვა (BMS)',
      ],
    },
    {
      title: 'სუსტი დენები',
      services: [
        'კომპიუტერია, ტელეფონია, ტელევიზია',
        'ხანძარსაწინააღმდეგო სიგნალიზაცია,',
        'ვიდეო მეთვალყურეობა',
        'ფონური მუსიკა',
        'სისტემების კომპიუტერული მართვა (BMS)',
      ],
    },
    {
      title: 'სუსტი დენები',
      services: [
        'კომპიუტერია, ტელეფონია, ტელევიზია',
        'ხანძარსაწინააღმდეგო სიგნალიზაცია,',
        'ვიდეო მეთვალყურეობა',
        'ფონური მუსიკა',
        'სისტემების კომპიუტერული მართვა (BMS)',
      ],
    },
    ]
}



