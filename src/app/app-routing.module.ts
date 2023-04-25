import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsDeedsSectionComponent } from './awards-deeds-section/awards-deeds-section.component';

const routes: Routes = [
  { path: '', component: AwardsDeedsSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
