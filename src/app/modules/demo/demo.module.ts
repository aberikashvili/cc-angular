import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
  },
];

@NgModule({
  declarations: [DemoComponent],
  imports: [RouterModule.forChild(routes), SharedModule, ReactiveFormsModule],
})
export class DemoModule {}
