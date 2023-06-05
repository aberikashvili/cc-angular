import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyPartnersSectionComponent } from './components/my-partners-section/my-partners-section.component';
import { NeedOurHelpSectionComponent } from './components/need-our-help-section/need-our-help-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { AwardsDeedsSectionComponent } from './components/awards-deeds-section/awards-deeds-section.component';
import { ServicesComponent } from './components/services/services.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ActivityPageComponent } from 'src/app/activity-page/activity-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, AwardsDeedsSectionComponent, MyPartnersSectionComponent, AboutUsSectionComponent,  NeedOurHelpSectionComponent,ServicesComponent],
  imports: [RouterModule.forChild(routes), SharedModule, ReactiveFormsModule,CarouselModule],
})
export class HomeModule {}
