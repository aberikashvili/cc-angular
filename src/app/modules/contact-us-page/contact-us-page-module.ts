import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactUsPageComponent } from './contact-us-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPageComponent,
  },
];

@NgModule({
  declarations: [ContactUsPageComponent,],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ContactUsPageModule {}
