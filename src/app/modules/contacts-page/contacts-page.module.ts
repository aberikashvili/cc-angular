import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ContactsPageComponent } from './contacts-page.component';
import { ContactsSectionComponent } from './components/contacts-section/contacts-section.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ContactsPageModule {}
