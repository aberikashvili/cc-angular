import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-team-section',
  templateUrl: './our-team-section.component.html',
  styleUrls: ['./our-team-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamSectionComponent {
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
        items: 3,
      },
      801: {
        items: 4,
      },
    },
  };

  cards = [
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },

    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },

    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },

    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
    {
      img: 'assets/img/box.jpg',
      NameSurname: 'გოჩა ვაშაკიძე',
      title: 'საწყობის უფროსი',
      height: '385px',
    },
  ];

  sliderData = [
    {
      left: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      middle: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      right: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      last: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
    },
    {
      left: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      middle: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      right: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      last: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
    },
    {
      left: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      middle: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      right: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      last: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
    },
    {
      left: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      middle: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      right: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
      last: {
        img: 'assets/img/box.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი',
        height: '385px',
      },
    },
  ];
}
