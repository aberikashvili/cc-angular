import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TanamshromlebiPageComponent } from './tanamshromlebi-page.component';
import { TanamshromlebiOurTeamComponent } from './components/tanamshromlebi-our-team/tanamshromlebi-our-team.component';

const routes: Routes = [
  {
    path: '',
    component: TanamshromlebiPageComponent,
  },
];

@NgModule({
  declarations: [TanamshromlebiPageComponent, TanamshromlebiOurTeamComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class ProjectsPageModule {}
