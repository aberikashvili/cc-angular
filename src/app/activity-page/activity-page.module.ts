import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ActivityPageComponent } from './activity-page.component';


const routes: Routes = [
  {
    path: '',
    component: ActivityPageComponent,
  },
];

@NgModule({
  declarations: [
    
   
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})

export class ActivityPageModule{}