import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awards-deeds-section',
  templateUrl: './awards-deeds-section.component.html',
  styleUrls: ['./awards-deeds-section.component.scss'],
})
export class AwardsDeedsSectionComponent {
  constructor(private router: Router) {}

  redirectToAwards() {
    this.router.navigate(['/my-partners']);
  }
}
