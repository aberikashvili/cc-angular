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
   image:'assets/images/parliament.png',
   paragraph:'დასრულებული',
   title:'ქუთაისის პარლამენტი',
   description: [
        'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული',
        'ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი',
        'წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას',
        'საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.', 
      ],

   paragraph1:'შესრულებული სამუშაო',

   leftServices : [
        'გათბობა-კონდიცირება',
        'ხანძარსაწინააღმდეგო სიგნალიზაცია,',
        'ვიდეო მეთვალყურეობა',
        'ფონური მუსიკა',
        'სისტემების კომპიუტერული მართვა (BMS)',
   ],
   rightServices :[
        'ვიდეო თვალყური',
        'სახანძრო სისტემები',
        'ვიდეო მეთვალყურეობა',
        'სრული სისტემების', 
        'კომპიუტერული მართვა BMS',
   ]
   }

]




 ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


