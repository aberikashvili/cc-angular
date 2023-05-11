import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-team-section',
  templateUrl: './our-team-section.component.html',
  styleUrls: ['./our-team-section.component.scss']
})
export class OurTeamSectionComponent {
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  @ViewChild('sliderBalls') sliderBalls!: ElementRef;

  sliderData: any[] = [];
  sliderBallsData: any[] = [];

  private currentIndex = 0;
  private interval: any;

  ngAfterViewInit() {
    this.slide(0);
  }

  ngOnInit() {
    this.getSliderData();
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



  getSliderData() {
    this.sliderData = [
    {
      left: {
        img: 'assets/img/chvenigundi.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი'  
      },
      middle: {
        img: 'assets/img/chvenigundi.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი'
      },
      right: {
        img: 'assets/img/chvenigundi.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი'
      },
      last: {
        img: 'assets/img/chvenigundi.jpg',
        NameSurname: 'გოჩა ვაშაკიძე',
        title: 'საწყობის უფროსი'
      }
    }, 
    // {
    //   left: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   middle: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   right: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   last: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   }
    // },
    // {
    //   left: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   middle: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   right: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   last: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   }
    // },
    // {
    //   left: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   middle: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   right: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   },
    //   last: {
    //     img: 'assets/img/chvenigundi.jpg',
    //     NameSurname: 'გოჩა ვაშაკიძე',
    //     title: 'საწყობის უფროსი'
    //   }
    // },
    ]
  }
}

    
        