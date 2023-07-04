import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tanamshromlebi-our-team',
  templateUrl: './tanamshromlebi-our-team.component.html',
  styleUrls: ['./tanamshromlebi-our-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TanamshromlebiOurTeamComponent {
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
