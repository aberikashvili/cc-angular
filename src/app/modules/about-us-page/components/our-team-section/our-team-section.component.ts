import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-our-team-section',
  templateUrl: './our-team-section.component.html',
  styleUrls: ['./our-team-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamSectionComponent {
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
