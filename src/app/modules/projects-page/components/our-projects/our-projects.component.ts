import { Component } from '@angular/core';
import { FilterMode } from './enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.scss'],
})
export class OurProjectsComponent {
  constructor(public router: Router) {}
  selectedFilter: FilterMode = FilterMode.All;
  filterMode = 'all';

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
    this.filterMode == buttonItem;
    if (clicked?.categoryId === 'finished') {
      this.router.navigate(['/other-projects']);
    }
  }

  List: any[] = [
    {
      img: 'assets/img/parlament.jpg',
      stage: 'დასრულებული',
      name: 'ქუთაისის პარლამენტი',
      category: 'onGoing',
    },
    {
      img: 'assets/img/parlament.jpg',
      stage: 'დასრულებული',
      name: 'ქუთაისის პარლამენტი',
      category: 'onGoing',
    },
    {
      img: 'assets/img/parlament.jpg',
      stage: 'დასრულებული',
      name: 'ქუთაისის პარლამენტი',
      category: 'onGoing',
    },
    {
      img: 'assets/img/parlament.jpg',
      stage: 'დასრულებული',
      name: 'ქუთაისის პარლამენტი',
      category: 'finished',
    },
  ];

  getList() {
    if (this.filterMode === 'all') {
      return this.List;
    }
    return this.List.filter((listItem) => listItem.category === this.filterMode);
  }
}
