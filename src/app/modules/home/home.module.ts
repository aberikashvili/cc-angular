import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyPartnersSectionComponent } from './components/my-partners-section/my-partners-section.component';
import { ThinksAboutUsComponent } from './components/thinks-about-us/thinks-about-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, MyPartnersSectionComponent, ThinksAboutUsComponent, ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
