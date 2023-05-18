import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { AboutUsPageComponent } from './about-us-page.component';
import { OurTeamSectionComponent } from './components/our-team-section/our-team-section.component';
import { YourReliablePartnersSectionComponent } from './components/your-reliable-partners-section/your-reliable-partners-section.component';
import { AwardsDeedsSectionSecondComponent } from './components/awards-deeds-section-second/awards-deeds-section-second.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPageComponent,
  },
];

@NgModule({
  declarations: [
    AboutUsPageComponent,
    OurTeamSectionComponent,
    YourReliablePartnersSectionComponent,
    AwardsDeedsSectionSecondComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class AboutUsPageModule {}
