import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactUsPageComponent } from './contact-us-page.component';
import { ContactUsSectionComponent } from './components/contact-us-section/contact-us-section.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPageComponent,
  },
];

@NgModule({
  declarations: [ContactUsPageComponent, ContactUsSectionComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ContactUsPageModule {}
