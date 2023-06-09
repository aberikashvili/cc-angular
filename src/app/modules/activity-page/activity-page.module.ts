import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ActivityPageComponent } from './activity-page.component';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';


const routes: Routes = [
  {
    path: '',
    component: ActivityPageComponent,
  },
];

@NgModule({
  declarations: [
    ActivityPageComponent,
    ActivitySectionComponent
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})

export class ActivityPageModule{}