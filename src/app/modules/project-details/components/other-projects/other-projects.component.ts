import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss'],
})
export class OtherProjectsComponent {
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
  // @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  // @ViewChild('sliderBalls') sliderBalls!: ElementRef;
  // sliderData: any[] = [];
  // sliderBallsData: any[] = [];
  // private currentIndex = 0;
  // ngAfterViewInit() {
  //   this.slide(0);
  // }
  // ngOnInit() {
  //   this.getSliderData();
  // }
  // slide(index: number) {
  //   const sliderTrack = this.sliderTrack?.nativeElement;
  //   const sliderBalls = this.sliderBalls?.nativeElement;
  //   if (index < 0 || index >= sliderTrack?.children.length) {
  //     return;
  //   }
  //   sliderTrack.style.transform = `translateX(-${index * 100}%)`;
  //   sliderBalls?.children[this.currentIndex].classList.remove('active');
  //   sliderBalls?.children[index].classList.add('active');
  //   this.currentIndex = index;
  // }
  // onClickBall(index: any) {
  //   this.slide(index);
  // }
  // prev() {
  //   if (this.currentIndex === 0) {
  //     this.currentIndex = this.sliderData.length - 1;
  //   } else {
  //     this.currentIndex--;
  //   }
  //   this.slide(this.currentIndex);
  // }
  // next() {
  //   if (this.currentIndex === this.sliderData.length - 1) {
  //     this.currentIndex = 0;
  //   } else {
  //     this.currentIndex++;
  //   }
  //   this.slide(this.currentIndex);
  // }
  // getSliderData() {
  //   this.sliderData = [
  //     {
  //       left: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       middle: {
  //         img: 'assets/img/iusticia.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       right: {
  //         img: 'assets/img/karfuri.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       last: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //     },
  //     {
  //       left: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       middle: {
  //         img: 'assets/img/iusticia.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       right: {
  //         img: 'assets/img/karfuri.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       last: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //     },
  //     {
  //       left: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       middle: {
  //         img: 'assets/img/iusticia.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       right: {
  //         img: 'assets/img/karfuri.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       last: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //     },
  //     {
  //       left: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       middle: {
  //         img: 'assets/img/iusticia.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       right: {
  //         img: 'assets/img/karfuri.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //       last: {
  //         img: 'assets/img/parlament.jpg',
  //         NameSurname: 'ქუთაისის პარლამენტი',
  //         title: 'დასრულებული',
  //       },
  //     },
  //   ];
  // }
}
