import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
];

@NgModule({
  declarations: [ProjectsPageComponent, OurProjectsComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProjectsPageModule {}
