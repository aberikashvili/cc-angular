import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { ProjectsPageComponent } from './projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
];

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProjectsPageModule {}
