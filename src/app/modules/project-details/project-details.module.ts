import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OtherProjectsComponent } from './components/other-projects/other-projects.component';
import { ProjectDetailsComponent } from './project-details.component';
import { AxalcixeSmartComponent } from './components/axalcixe-smart/axalcixe-smart.component';
import { PhotoGallerySectionComponent } from './components/photo-gallery-section/photo-gallery-section.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailsComponent,
  },
];

@NgModule({
  declarations: [
    OtherProjectsComponent,
    ProjectDetailsComponent,
    AxalcixeSmartComponent,
    PhotoGallerySectionComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProjectDetailsModule {}
