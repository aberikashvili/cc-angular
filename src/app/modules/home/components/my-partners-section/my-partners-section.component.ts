import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-partners-section',
  templateUrl: './my-partners-section.component.html',
  styleUrls: ['./my-partners-section.component.scss']
})
export class MyPartnersSectionComponent {
  constructor(private router:Router) {

  }
  redirectToMyPartners() {
    this.router.navigate(['/my-partners']);
  }
}
