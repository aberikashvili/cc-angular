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

  private _currentIndex = 0;

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

    sliderBalls?.children[this._currentIndex].classList.remove('active');
    sliderBalls?.children[index].classList.add('active');

    this._currentIndex = index;
  }

  onClickBall(index: any) {
    this.slide(index);
  }

  prev() {
    if (this._currentIndex === 0) {
      this._currentIndex = this.sliderData.length - 1;
    } else {
      this._currentIndex--;
    }

    this.slide(this._currentIndex);
  }

  next() {
    if (this._currentIndex === this.sliderData.length - 1) {
      this._currentIndex = 0;
    } else {
      this._currentIndex++;
    }

    this.slide(this._currentIndex);
  }
}
