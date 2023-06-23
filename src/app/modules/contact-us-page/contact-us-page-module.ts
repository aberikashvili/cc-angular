import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactUsPageComponent } from './contact-us-page.component';
import { ContactUsSectionComponent } from '../contact-us-page/components/contact-us-section/contact-us-section.component';
import { TestSectionComponent } from './components/test-section/test-section.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ContactUsPageComponent,
  },
];

@NgModule({
  declarations: [ContactUsPageComponent,ContactUsSectionComponent,TestSectionComponent],
  imports: [RouterModule.forChild(routes), SharedModule,ReactiveFormsModule],
})
export class ContactUsPageModule {}
