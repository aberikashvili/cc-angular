import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsSectionComponent {
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  @ViewChild('sliderBalls') sliderBalls!: ElementRef;

  sliderData: any[] = [];
  sliderBallsData: any[] = [];

  public currentIndex = 0;
  private interval: any;

  ngOnInit() {
    this.getSliderData();
    this?.slide(0);
  }

  slide(index: number) {
    const sliderTrack = this.sliderTrack?.nativeElement;
    const sliderBalls = this.sliderBalls?.nativeElement;

    if (index < 0 || index >= sliderTrack?.children.length) {
      return;
    }

    sliderTrack.style.transform = `translateX(-${index * 100}%)`;

    sliderBalls?.children[this.currentIndex].classList.remove('active');
    sliderBalls?.children[index].classList.add('active');

    this.currentIndex = index;
  }

  onClickBall(index: any) {
    this.slide(index);
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      500: {
        items: 1,
      },
      801: {
        items: 4,
      },
    },
  };

  cards = [
    {
      text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
      img: '',
      title: 'სახელი გვარი',
      companyName: 'კომპანიის დასახელება',
    },
    {
      text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
      img: '',
      title: 'სახელი გვარი',
      companyName: 'კომპანიის დასახელება',
    },
    {
      text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
      img: '',
      title: 'სახელი გვარი',
      companyName: 'კომპანიის დასახელება',
    },
    {
      text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
      img: '',
      title: 'სახელი გვარი',
      companyName: 'კომპანიის დასახელება',
    },
    {
      text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
      img: '',
      title: 'სახელი გვარი',
      companyName: 'კომპანიის დასახელება',
    },
  ];

  getSliderData() {
    this.sliderData = [
      {
        left: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        middle: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        right: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
      },
      {
        left: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        middle: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        right: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
      },
      {
        left: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        middle: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        right: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
      },
      {
        left: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        middle: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
        right: {
          text: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          img: '',
          title: 'სახელი გვარი',
          companyName: 'კომპანიის დასახელება',
        },
      },
    ];
  }
}
