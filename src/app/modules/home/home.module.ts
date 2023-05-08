import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyPartnersSectionComponent } from './components/my-partners-section/my-partners-section.component';
import { NeedOurHelpSectionComponent } from './components/need-our-help-section/need-our-help-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { AwardsDeedsSectionComponent } from './components/awards-deeds-section/awards-deeds-section.component';
import { WarmHouseComponent } from './components/warm-house/warm-house.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, MyPartnersSectionComponent,FooterComponent, AwardsDeedsSectionComponent, NeedOurHelpSectionComponent, AboutUsSectionComponent, WarmHouseComponent,],
  imports: [RouterModule.forChild(routes),ReactiveFormsModule, SharedModule,],
})
export class HomeModule {}
