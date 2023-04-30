import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyPartnersSectionComponent } from './components/my-partners-section/my-partners-section.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, MyPartnersSectionComponent, AboutUsSectionComponent  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
