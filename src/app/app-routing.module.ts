import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'demo',
    loadChildren: () => import('./modules/demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'my-partners',
    loadChildren: () =>
      import('./modules/my-partners-page/my-partners-page.module').then(
        (m) => m.MyPartnersPageModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/about-us-page/about-us-page.module').then((m) => m.AboutUsPageModule),
  },

  {
    path: 'contact-us',
    loadChildren: () => import('./modules/contact-us-page/contact-us-page-module').then((m)=>m.ContactUsPageModule)
  },

  

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
