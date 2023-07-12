import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { AwardsDeedsSectionSecondComponent } from './awards-deeds-section-second.component';

const routes: Routes = [
  {
    path: '',
    component: AwardsDeedsSectionSecondComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class AwardsDeedsSectionSecondComponentModule {}
