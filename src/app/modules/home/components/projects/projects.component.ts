import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})

export class ProjectsComponent implements OnInit  {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
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
    
]

 ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


