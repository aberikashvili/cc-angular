import { Component } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
})
export class OurProjectsComponent {
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
