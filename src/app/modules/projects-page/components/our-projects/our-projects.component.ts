import { Component } from '@angular/core';
import { FilterMode } from './enums';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
})
export class OurProjectsComponent {
  selectedFilter: FilterMode = FilterMode.All;
  filterMode = 'all';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 0,
      },
      400: {
        items: 0,
      },
      740: {
        items: 0,
      },
      940: {
        items: 0,
      },
    },
    nav: true,
  };

  constructor(private router: Router) {}

  filterButtons: { text: string; categoryId: string; width: string; isDim: boolean }[] = [
    { categoryId: 'all', text: 'ყველა პროექტი', width: '182px', isDim: false },
    { categoryId: 'onGoing', text: 'მიმდინარე', width: '144px', isDim: true },
    { categoryId: 'finished', text: 'დასრულებული', width: '175px', isDim: true },
  ];

  filterChanged(buttonItem: string) {
    const clicked = this.filterButtons.find((item) => item.categoryId === buttonItem);
    if (clicked) {
      this.filterButtons.forEach((item) => {
        item.isDim = true;
      });
      clicked.isDim = false;
    }
    this.filterMode = buttonItem;
  }

  List: any[] = [
    {
      img: 'assets/img/parlament.jpg',
      stage: 'დასრულებული',
      name: 'ქუთაისის პარლამენტი',
      category: 'onGoing',
      id: '1',
    },
    {
      img: 'assets/img/parlament.jpg',
      stage: 'მიმდინარე',
      name: 'ქუთაისის პარლამენტი',
      category: 'onGoing',
      id: '2',
    },
    {
      img: 'assets/img/parlament.jpg',
      stage: 'დასრულებული',
      name: 'ქუთაისის პარლამენტი',
      category: 'onGoing',
      id: '3',
    },
    {
      img: 'assets/img/parlament.jpg',
      stage: 'დასრულებული',
      name: 'ქუთაისის პარლამენტი',
      category: 'finished',
      id: '4',
    },
  ];

  getList() {
    if (this.filterMode === 'all') {
      return this.List;
    }

    return this.List.filter((listItem) => listItem.category === this.filterMode);
  }

  routerClick() {
    this.router.navigate(['/project/1']);
  }
}
