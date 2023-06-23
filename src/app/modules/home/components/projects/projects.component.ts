import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    center: true,
    dots: false,
    navText: ['prev', 'next'],
    nav: false,
    items: 1,
  };

  cards = [
    {
      image: 'assets/images/parliament.png',
      paragraph: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
      description: [
        'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული',
        'ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი',
        'წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას',
        'საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.',
      ],

      paragraph1: 'შესრულებული სამუშაო',

      leftServices: [
        'გათბობა-კონდიცირება',
        'ვენტილაცია',
        'კანალიზაცია',
        'წყალმომარაგება',
        'ელექტროობა',
      ],
      rightServices: [
        'ვიდეო თვალყური',
        'სახანძრო სისტემები',
        'სრული სისტემების',
        'კომპიუტერული მართვა BMS',
      ],
      text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს',
    },
    {
      image: 'assets/images/parliament.png',
      paragraph: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
      description: [
        'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული',
        'ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი',
        'წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას',
        'საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი.',
      ],

      paragraph1: 'შესრულებული სამუშაო',

      leftServices: [
        'გათბობა-კონდიცირება',
        'ვენტილაცია',
        'კანალიზაცია',
        'წყალმომარაგება',
        'ელექტროობა',
      ],
      rightServices: [
        'ვიდეო თვალყური',
        'სახანძრო სისტემები',
        'სრული სისტემების',
        'კომპიუტერული მართვა BMS',
      ],
      text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს',
    },
  ];
}
