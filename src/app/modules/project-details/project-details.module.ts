import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OtherProjectsComponent } from './components/other-projects/other-projects.component';
import { ProjectDetailsComponent } from './project-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailsComponent,
  },
];

@NgModule({
  declarations: [OtherProjectsComponent, ProjectDetailsComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProjectDetailsModule {}
