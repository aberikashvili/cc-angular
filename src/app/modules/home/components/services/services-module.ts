import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services.component';


const routes: Routes = [
    {
      path: '',
      component: ServicesComponent,
    },
  ];

  @NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), SharedModule, ReactiveFormsModule,],
  })
  export class ServicesModule {}