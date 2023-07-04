import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isShow: Boolean = false;
  onBurgerShow() {
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }
}