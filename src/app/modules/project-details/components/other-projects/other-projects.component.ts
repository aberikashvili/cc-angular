import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss'],
})
export class OtherProjectsComponent {
  @Input() textAlign?: string;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      500: {
        items: 2,
      },
      800: {
        items: 1,
      },
    },
  };

  cards = [
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
    {
      img: 'assets/img/parlament.jpg',
      NameSurname: 'დასრულებული',
      title: 'ქუთაისის პარლამენტი',
    },
  ];

  sliderData = [
    {
      left: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      middle: {
        img: 'assets/img/iusticia.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      right: {
        img: 'assets/img/karfuri.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      last: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
    },
    {
      left: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      middle: {
        img: 'assets/img/iusticia.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      right: {
        img: 'assets/img/karfuri.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      last: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
    },
    {
      left: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      middle: {
        img: 'assets/img/iusticia.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      right: {
        img: 'assets/img/karfuri.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      last: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
    },
    {
      left: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      middle: {
        img: 'assets/img/iusticia.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      right: {
        img: 'assets/img/karfuri.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
      last: {
        img: 'assets/img/parlament.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '244px',
      },
    },
  ];
}
