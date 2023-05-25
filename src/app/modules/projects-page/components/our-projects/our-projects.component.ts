import { Component } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
})
export class OurProjectsComponent {
  filterButtons: { text: string; width: string; isDim: boolean }[] = [
    { text: 'ყველა პროექტი', width: '182px', isDim: false },
    { text: 'მიმდინარე', width: '182px', isDim: true },
    { text: 'დასრულებული', width: '140px', isDim: true },
  ];

  filterChanged(buttonItem: string) {
    const clicked = this.filterButtons.find((item) => item.text === buttonItem);
    if (clicked) {
      this.filterButtons.forEach((item) => {
        item.isDim = true;
      });
      clicked.isDim = false;
    }
  }

  List: any[] = [];

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.List = [
      {
        first: {
          img: 'assets/img/parlament.jpg',
          stage: 'დასრულებული',
          name: 'ქუთაისის პარლამენტი',
        },
        second: {
          img: 'assets/img/parlament.jpg',
          stage: 'დასრულებული',
          name: 'ქუთაისის პარლამენტი',
        },
        third: {
          img: 'assets/img/parlament.jpg',
          stage: 'დასრულებული',
          name: 'ქუთაისის პარლამენტი',
        },
        fourth: {
          img: 'assets/img/parlament.jpg',
          stage: 'დასრულებული',
          name: 'ქუთაისის პარლამენტი',
        },
      },
      // {
      //   first: {
      //     img: 'assets/img/parlament.jpg',
      //     stage: 'დასრულებული',
      //     name: 'ქუთაისის პარლამენტი',
      //   },
      //   second: {
      //     img: 'assets/img/parlament.jpg',
      //     stage: 'დასრულებული',
      //     name: 'ქუთაისის პარლამენტი',
      //   },
      //   third: {
      //     img: 'assets/img/parlament.jpg',
      //     stage: 'დასრულებული',
      //     name: 'ქუთაისის პარლამენტი',
      //   },
      //   fourth: {
      //     img: 'assets/img/parlament.jpg',
      //     stage: 'დასრულებული',
      //     name: 'ქუთაისის პარლამენტი',
      //   },
      // },
    ];
  }
}
