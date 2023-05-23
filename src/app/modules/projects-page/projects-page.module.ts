import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page.component';
import { NgModule } from '@angular/core';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
];

@NgModule({
  declarations: [OurProjectsComponent, ProjectsPageComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProjectsPageModule {}
