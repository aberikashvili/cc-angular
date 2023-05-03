import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AwardsDeedsSectionComponent } from './components/awards-deeds-section/awards-deeds-section.component';
import { MyPartnersSectionComponent } from './components/my-partners-section/my-partners-section.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, AwardsDeedsSectionComponent, MyPartnersSectionComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
