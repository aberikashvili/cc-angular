import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 10,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1100: {
        items: 3,
      },
      1500: {
        items: 4,
      },
      1920: {
        items: 5,
      },
    },
  };

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
  ];
}
