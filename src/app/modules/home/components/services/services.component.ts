import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { raceInit } from 'rxjs/internal/observable/race';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements AfterViewInit {
  customOptions: OwlOptions = {
    
    margin:40,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText: ['', ''],
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
    
  };

  ngAfterViewInit(): void {}


  cards = [
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
      
    },
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
    },
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
      
    },
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
    },
    {
      title: 'სუსტი დენები',
      description: 'კომპიუტერია, ტელეფონია, ტელევიზია',
      description2:"ხანძარსაწინააღმდეგო სიგნალიზაცია,",
      description3:"ვიდეო მეთვალყურეობა",
      description4:"ფონური მუსიკა",
      description5:"სისტემების კომპიუტერული მართვა (BMS)",
    },
    
    
    
  ];

}



