import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() data: any[] = [];
  @Input() height?: string;
  @Input() heading?: string;
  @Input() textAlign?: string;

  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  @ViewChild('sliderBalls') sliderBalls!: ElementRef;

  sliderData: any[] = [];
  sliderBallsData: any[] = [];

  private currentIndex = 0;

  ngAfterViewInit() {
    this.slide(0);
  }

  ngOnInit() {}

  get customHeight(): string | undefined {
    return this.height;
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

  prev() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.sliderData.length - 1;
    } else {
      this.currentIndex--;
    }

    this.slide(this.currentIndex);
  }

  next() {
    if (this.currentIndex === this.sliderData.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.slide(this.currentIndex);
  }
}
